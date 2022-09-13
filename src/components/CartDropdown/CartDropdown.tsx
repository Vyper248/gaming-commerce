import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCart } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import StyledCartDropdown from './CartDropdown.style';

import { CartItem as CartItemType } from "../../redux/cartSlice";

const CartDropdown = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const open = useSelector((state: RootState) => state.cart.open);
    const history = useHistory();

    if (!open) return null;

    const onClickBasket = () => {
        history.push('/Basket');
        dispatch(toggleCart());
    }

    return (
        <StyledCartDropdown>
            <div>
                { cartItems.map((item: CartItemType) => <CartItem key={item.item.id} cartItem={item}/>) }
            </div>
            { cartItems.length === 0 ? <div className='empty'>Your basket is empty</div> : null }
            <Button label='View Full Basket' onClick={onClickBasket} width='calc(100% - 10px)'/>
        </StyledCartDropdown>
    );
}

export default memo(CartDropdown);