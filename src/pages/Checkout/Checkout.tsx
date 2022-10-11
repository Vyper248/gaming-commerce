import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Appearance, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import StyledBasket from '../Basket/Basket.style';

import { RootState } from '../../redux/store';

import { stripePromise } from '../../utils/stripe/stripe.utils';

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import Container from '../../components/Container/Container';
import BasketItems from '../../components/BasketItems/BasketItems';

const Checkout = () => {
    const [clientSecret, setClientSecret] = useState("");

    const currentUser = useSelector((state: RootState) => state.user.currentUser);

    const checkoutItems = useSelector((state: RootState) => state.cart.checkoutItems);
    const checkoutPrice = useSelector((state: RootState) => state.cart.checkoutPrice);

    useEffect(() => {
        if (checkoutPrice === 0) return;

        try {
            const fetchPaymentIntent = async () => {
                let amountValue = Math.round(checkoutPrice * 100);
                let data = await fetch('/.netlify/functions/create-payment-intent', {
                    method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify({amount: amountValue, user: currentUser})
                }).then(res => res.json());
    
                setClientSecret(data.paymentIntent.client_secret);
            }
    
            fetchPaymentIntent();
        } catch (error) {
            console.log(error);
        }
    }, [checkoutPrice, currentUser]);

    const appearance: Appearance = {
        theme: 'flat',
      };

    const options: StripeElementsOptions = {
        clientSecret,
        appearance
    };

    return (
        <StyledBasket>
            <h2>Checkout</h2>
            <Container>
                <BasketItems type='checkout'/>
                <div id='stripeDetails'>
                    Please use the following test details for payment: <br />
                    Card Number: 4242 4242 4242 4242 <br />
                    Date: Any future date, CVV: Any 3 digit number
                </div>
                {clientSecret && checkoutPrice > 0 && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm items={checkoutItems}/>
                    </Elements>
                )}
            </Container>
        </StyledBasket>
    );
}

export default Checkout;