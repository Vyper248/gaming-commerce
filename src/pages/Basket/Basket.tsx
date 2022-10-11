import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import StyledBasket, { StyledImage } from './Basket.style';

import { RootState } from '../../redux/store';
import { increaseQty, decreaseQty, removeItem, CartItem, DisplayCartItem } from '../../redux/cartSlice';
import { selectCartIds } from '../../redux/selectors';

import { GET_CART_ITEMS } from '../../utils/gql/gql.categories';
import { getDisplayCartItems } from '../../utils/gql/gql.utils';

import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import IconButton from '../../components/IconButton/IconButton';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';

const BasketRow = ({ item, qty }: DisplayCartItem) => {
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increaseQty(item));
    const onDecrease = () => dispatch(decreaseQty(item));
    const onRemove = () => dispatch(removeItem(item));

    return (<tr>
        <td><StyledImage imageURL={item.imageURL} /></td>
        <td>{item.name}</td>
        <td><QuantitySelector qty={qty} onIncrease={onIncrease} onDecrease={onDecrease} /></td>
        <td>£{(item.price * qty).toFixed(2)}</td>
        <td><IconButton Icon={FaTrashAlt} onClick={onRemove} /></td>
    </tr>)
}

const Basket = () => {
    const history = useHistory();

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

    
    const onCheckout = () => {
        if (!currentUser) {
            history.push('/SignIn');
        } else {
            history.push('/Checkout');
        }
    }

    if (error) return (
        <StyledBasket>
            <h2>Basket</h2>
            <p>Error getting cart items - {error.message}</p>
        </StyledBasket>
    );

    return (
        <StyledBasket>
            <h2>Basket</h2>
            <Container>
                <Spinner isLoading={loading}>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Remove</th>
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
                    <div style={{textAlign: 'right'}}>
                        <Button label='Checkout' style={{marginLeft: 'auto'}} onClick={onCheckout}/>
                    </div>
                </Spinner>
            </Container>
        </StyledBasket>
    );
}

export default Basket;