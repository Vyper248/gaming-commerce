import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { toggleCart } from '../redux/cartSlice';

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

    & > div.empty {
        text-align: center;
    }
`

const CartDropdown = () => {
    const dispatch = useDispatch();
    const open = useSelector(state => state.cart.open);
    const cartItems = useSelector(state => state.cart.items);
    const history = useHistory();

    if (!open) return null;

    const onClickBasket = () => {
        history.push('/Basket');
        dispatch(toggleCart());
    }

    return (
        <StyledComp>
            <div>
                { cartItems.map(item => <CartItem key={item.item.id} cartItem={item}/>) }
            </div>
            { cartItems.length === 0 ? <div className='empty'>Your basket is empty</div> : null }
            <Button label='View Full Basket' onClick={onClickBasket} width='calc(100% - 10px)'/>
        </StyledComp>
    );
}

export default memo(CartDropdown);