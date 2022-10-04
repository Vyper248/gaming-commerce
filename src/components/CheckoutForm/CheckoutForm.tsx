import React from 'react';
import { useStripe, useElements, CardElement, PaymentElement } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js/types/stripe-js/elements';

import StyledCheckoutForm from "./CheckoutForm.style";

import Button from '../Button/Button';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: React.SyntheticEvent) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ amount: 10000 })
        }).then(resp => resp.json());

        const { paymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement) as StripeCardElement,
                billing_details: {
                    name: 'Chris'
                }
            }
        });

        if (paymentResult.error) {
            console.log(paymentResult.error);
        } else if (paymentResult.paymentIntent.status === 'succeeded') {
            console.log('Payment Successful');
        }
    };

    return (
        <StyledCheckoutForm>
            <form onSubmit={handleSubmit}>
                <h2>Card Payment</h2>
                <CardElement />
                <Button label='Pay Now' backgroundColor='black' disabled={!stripe} />
            </form>
        </StyledCheckoutForm>
    )
}

export default CheckoutForm;