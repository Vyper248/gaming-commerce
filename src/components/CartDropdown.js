import styled from 'styled-components';
import Button from './Button';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const StyledComp = styled.div`
    position: absolute;
    right: 30px;
    top: 90px;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    background-color: white;
    width: 300px;
    height: 400px;
    z-index: 2;
    padding: 20px;

    & > div {
        width: calc(100% - 10px);
        margin: 5px;
        flex-grow: 1;
        overflow: scroll;

        > div {
            height: 100px;
        }
    }
`

const CartDropdown = () => {
    const open = useSelector(state => state.cart.open);
    const cartItems = useSelector(state => state.cart.items);

    if (!open) return null;

    return (
        <StyledComp>
            <div>
                { cartItems.map(item => <CartItem key={item.item.id} cartItem={item}/>) }
            </div>
            <Button label='Go To Checkout' width='calc(100% - 10px)'/>
        </StyledComp>
    );
}

export default CartDropdown;