import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

import { placeOrder } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import StyledCheckoutForm from "./CheckoutForm.style";

import Button from '../Button/Button';
import { PaymentIntent } from '@stripe/stripe-js';
import { updateCurrentUser } from 'firebase/auth';
import { RootState } from '../../redux/store';
import { UserData } from '../../redux/userSlice';
import { current } from '@reduxjs/toolkit';

const CheckoutForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | undefined>("");

    const currentUser = useSelector((state: RootState) => state.user.currentUser as UserData | null);

    //checks Stripe payment intent to decide what to show the user
    const handlePaymentIntent = useCallback((paymentIntent: PaymentIntent | undefined) => {
        if (!paymentIntent) return;

        switch (paymentIntent.status) {
            case "succeeded":
                dispatch(placeOrder());
                history.push('/Confirmation');
                break;
            case "processing":
                setMessage('Your payment is processing.');
                break;
            case "requires_payment_method":
                setMessage("Your payment was not successful, please try again.");
                break;
            default:
                setMessage("Something went wrong.");
                break;
        }
    },[dispatch, history]);

    //Check if payment was successful, happens when redirected back to this page, if using a redirect payment option.
    useEffect(() => {
        if (!stripe) return;

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) return;

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            handlePaymentIntent(paymentIntent);
        });
    }, [stripe, handlePaymentIntent]);

    const handleSubmit = async (event: React.SyntheticEvent) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (currentUser === null) return;

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        setLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: window.location.href,
                payment_method_data: {
                    billing_details: {
                        name: currentUser.displayName
                    }
                }
            },
            redirect: 'if_required'
        });

        setLoading(false);

        if (error && (error.type === "card_error" || error.type === "validation_error")) {
            setMessage(error.message);
        } else if (error) {
            setMessage("An unexpected error occurred.");
        }

        handlePaymentIntent(paymentIntent);
    };

    return (
        <StyledCheckoutForm>
            <form onSubmit={handleSubmit}>
                <h2>Card Payment</h2>
                <PaymentElement />
                <div style={{ textAlign: 'right' }}>
                    <Button label='Pay Now' width='150px' backgroundColor='black' disabled={!stripe} isLoading={loading} />
                </div>
                {message && <div style={{ textAlign: 'center', color: 'red' }}>{message}</div>}
            </form>
        </StyledCheckoutForm>
    )
}

export default CheckoutForm;