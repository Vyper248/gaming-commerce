import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import StyledCartDropdown from './CartDropdown.style';

import { toggleCart } from '../../redux/cartSlice';

import Button from '../Button/Button';
import BasketItems from '../BasketItems/BasketItems';

const CartDropdown = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onClickBasket = () => {
        history.push('/Basket');
        dispatch(toggleCart());
    }

    return (
        <StyledCartDropdown>
            <BasketItems type='dropdown'/>
            <Button label='View Full Basket' onClick={onClickBasket} width='calc(100% - 10px)'/>
        </StyledCartDropdown>
    );
}

export default memo(CartDropdown);