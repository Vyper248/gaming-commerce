import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Appearance, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import StyledBasket, { StyledImage } from '../Basket/Basket.style';

import { RootState } from '../../redux/store';
import { CartItem } from '../../redux/cartSlice';
import { selectTotalCost } from '../../redux/selectors';
import { stripePromise } from '../../utils/stripe/stripe.utils';

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import Container from '../../components/Container/Container';


const BasketRow = ({ item, qty }: CartItem) => {
    return (<tr>
        <td><StyledImage imageURL={item.imageURL} style={{height: '50px'}}/></td>
        <td>{item.name}</td>
        <td>{qty}</td>
        <td>£{item.price}</td>
    </tr>)
}

const Checkout = () => {
    const [clientSecret, setClientSecret] = useState("");

    const currentUser = useSelector((state: RootState) => state.user.currentUser);
    const items = useSelector((state: RootState) => state.cart.items);
    const totalCost = useSelector(selectTotalCost);
    const costString = totalCost;

    useEffect(() => {
        if (totalCost === 0) return;

        try {
            const fetchPaymentIntent = async () => {
                let data = await fetch('/.netlify/functions/create-payment-intent', {
                    method: 'POST',
                    headers: {'content-type': 'application/json'},
                    body: JSON.stringify({amount: totalCost * 100, user: currentUser})
                }).then(res => res.json());
    
                setClientSecret(data.paymentIntent.client_secret);
            }
    
            fetchPaymentIntent();
        } catch (error) {
            console.log(error);
        }
    }, [totalCost, currentUser]);

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
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item: CartItem) => {
                                return <BasketRow key={item.item.id} item={item.item} qty={item.qty} />
                            })
                        }
                    </tbody>
                </table>
                <div className='totalCost'>
                    TOTAL: £{costString.toFixed(2)}
                </div>
                <div id='stripeDetails'>
                    Please use the following test details for payment: <br />
                    Card Number: 4242 4242 4242 4242 <br />
                    Date: Any future date, CVV: Any 3 digit number
                </div>
                {clientSecret && totalCost > 0 && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </Container>
        </StyledBasket>
    );
}

export default Checkout;