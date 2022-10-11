import { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import { toggleCart } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import StyledCartDropdown from './CartDropdown.style';

import { DisplayCartItem } from "../../redux/cartSlice";
import { selectCartIds } from '../../redux/selectors';
import Spinner from '../Spinner/Spinner';

import { GET_CART_ITEMS } from '../../utils/gql/gql.categories';
import { getDisplayCartItems } from '../../utils/gql/gql.utils';

const CartDropdown = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const cartItemIds = useSelector(selectCartIds);
    const [items, setItems] = useState([] as DisplayCartItem[]);

    const { loading, error, data } = useQuery(GET_CART_ITEMS, { variables: { ids: cartItemIds }, fetchPolicy: 'no-cache'});

    useEffect(() => {
        if (data) {
            let displayCartItems = getDisplayCartItems(cartItems, data.cartItems);
            setItems(displayCartItems);
        }
    }, [data, cartItems]);

    if (error) return <p>Error getting cart items - {error.message}</p>;

    const onClickBasket = () => {
        history.push('/Basket');
        dispatch(toggleCart());
    }

    return (
        <StyledCartDropdown>
            <Spinner isLoading={loading}>
                <div id='cartItems'>
                    { items.map((item: DisplayCartItem) => <CartItem key={item.item.id} cartItem={item}/>) }
                </div>
                { cartItems.length === 0 ? <div className='empty'>Your basket is empty</div> : null }
                <Button label='View Full Basket' onClick={onClickBasket} width='calc(100% - 10px)'/>
            </Spinner>
        </StyledCartDropdown>
    );
}

export default memo(CartDropdown);