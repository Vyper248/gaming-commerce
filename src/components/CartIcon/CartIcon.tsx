import React from 'react';
import { memo } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import StyledCartIcon from './CartIcon.style';
import { RootState } from '../../redux/store';
import { CartItemType } from '../CartItem/CartItem';

const CartIcon = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    let numberOfItems = cartItems.reduce((a, c: CartItemType) => {
        return a + c.qty;
    }, 0);

    return (
        <StyledCartIcon>
            <AiOutlineShopping/>
            <div>{numberOfItems}</div>
        </StyledCartIcon>
    );
}

export default memo(CartIcon);