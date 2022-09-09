import React from "react";
import StyledCartItem from "./CartItem.style";

type Item = {
    imageURL: string;
    name: string;
    price: number;
}

type CartItem = {
    item: Item;
    qty: number;
}

type CartItemProps = {
    cartItem: CartItem;
}

const CartItem = ({cartItem}: CartItemProps) => {
    const item = cartItem.item;
    return (
        <StyledCartItem imageURL={item.imageURL}>
            <div id='itemImage'></div>
            <div id='itemDetails'>
                <p>{item.name}</p>
                <p>{cartItem.qty} x £{item.price}</p>
            </div>
        </StyledCartItem>
    );
}

export default CartItem;