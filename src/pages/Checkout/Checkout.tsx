import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Appearance, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from '@apollo/client';

import StyledBasket, { StyledImage } from '../Basket/Basket.style';

import { RootState } from '../../redux/store';
import { CartItem, DisplayCartItem } from '../../redux/cartSlice';
import { selectCartIds } from '../../redux/selectors';

import { stripePromise } from '../../utils/stripe/stripe.utils';

import { GET_CART_ITEMS } from '../../utils/gql/gql.categories';
import { getDisplayCartItems } from '../../utils/gql/gql.utils';

import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import Container from '../../components/Container/Container';
import Spinner from '../../components/Spinner/Spinner';

const BasketRow = ({ item, qty }: DisplayCartItem) => {
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

    const cartItems: CartItem[] = useSelector((state: RootState) => state.cart.items);
    const cartItemIds = useSelector(selectCartIds);
    const [items, setItems] = useState([] as DisplayCartItem[]);
    const [totalCost, setTotalCost] = useState(0);

    const { loading, error, data } = useQuery(GET_CART_ITEMS, { variables: { ids: cartItemIds }, fetchPolicy: 'no-cache'});

    useEffect(() => {
        if (data) {
            let displayCartItems = getDisplayCartItems(cartItems, data.cartItems);
            setItems(displayCartItems);
    
            setTotalCost(displayCartItems.reduce((a, c: DisplayCartItem) => {
                return a + (c.qty * c.item.price);
            }, 0));
        }
    }, [data, cartItems]);

    useEffect(() => {
        if (totalCost === 0) return;

        try {
            const fetchPaymentIntent = async () => {
                let amountValue = Math.round(totalCost * 100);
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
    }, [totalCost, currentUser]);

    if (error) return (
        <StyledBasket>
            <h2>Checkout</h2>
            <p>Error getting cart items - {error.message}</p>
        </StyledBasket>
    );

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
            <Spinner isLoading={loading}>
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
                                items.map((item: DisplayCartItem) => {
                                    return <BasketRow key={item.item.id} item={item.item} qty={item.qty} />
                                })
                            }
                        </tbody>
                    </table>
                    <div className='totalCost'>
                        TOTAL: £{totalCost.toFixed(2)}
                    </div>
                    <div id='stripeDetails'>
                        Please use the following test details for payment: <br />
                        Card Number: 4242 4242 4242 4242 <br />
                        Date: Any future date, CVV: Any 3 digit number
                    </div>
                    {clientSecret && totalCost > 0 && (
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm items={items}/>
                        </Elements>
                    )}
                </Container>
            </Spinner>
        </StyledBasket>
    );
}

export default Checkout;