import { AiOutlineShopping } from 'react-icons/ai';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledComp = styled.div`
    position: relative;

    & > svg {
        transform: scale(1.3);
    }

    & > div {
        position: absolute;
        left: 0px;
        top: 11px;
        font-size: 0.7em;
        text-align: center;
        width: 100%;
    }
`

const CartIcon = () => {
    const cartItems = useSelector(state => state.cart.items);

    let numberOfItems = cartItems.reduce((a, c) => {
        return a + c.qty;
    }, 0);

    return (
        <StyledComp>
            <AiOutlineShopping/>
            <div>{numberOfItems}</div>
        </StyledComp>
    );
}

export default CartIcon;