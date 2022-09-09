import React from 'react';
import { memo } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import StyledCartIcon from './CartIcon.style';


const CartIcon = () => {
    const cartItems = useSelector(state => state.cart.items);

    let numberOfItems = cartItems.reduce((a, c) => {
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