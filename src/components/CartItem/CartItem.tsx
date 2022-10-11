import StyledCartItem from "./CartItem.style";
import { DisplayCartItem } from "../../redux/cartSlice";

type CartItemProps = {
    cartItem: DisplayCartItem;
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