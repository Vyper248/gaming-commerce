import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import StyledBasket, { StyledImage } from './Basket.style';

import { RootState } from '../../redux/store';
import { increaseQty, decreaseQty, removeItem, CartItem } from '../../redux/cartSlice';
import { selectTotalCost } from '../../redux/selectors';

import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import IconButton from '../../components/IconButton/IconButton';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';

const BasketRow = ({ item, qty }: CartItem) => {
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increaseQty(item));
    const onDecrease = () => dispatch(decreaseQty(item));
    const onRemove = () => dispatch(removeItem(item));

    return (<tr>
        <td><StyledImage imageURL={item.imageURL} /></td>
        <td>{item.name}</td>
        <td><QuantitySelector qty={qty} onIncrease={onIncrease} onDecrease={onDecrease} /></td>
        <td>£{item.price}</td>
        <td><IconButton Icon={FaTrashAlt} onClick={onRemove} /></td>
    </tr>)
}

const Basket = () => {
    const history = useHistory();

    const currentUser = useSelector((state: RootState) => state.user.currentUser);
    const items = useSelector((state: RootState) => state.cart.items);
    const totalCost = useSelector(selectTotalCost);
    const costString = totalCost;

    const onCheckout = () => {
        if (!currentUser) {
            history.push('/SignIn');
        } else {
            history.push('/Checkout');
        }
    }

    return (
        <StyledBasket>
            <h2>Basket</h2>
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item: CartItem) => {
                                return <BasketRow key={item.item.id} item={item.item} qty={item.qty} />
                            })
                        }
                    </tbody>
                </table>
                <div className='totalCost'>
                    TOTAL: £{costString.toFixed(2)}
                </div>
                <div style={{textAlign: 'right'}}>
                    <Button label='Checkout' style={{marginLeft: 'auto'}} onClick={onCheckout}/>
                </div>
            </Container>
        </StyledBasket>
    );
}

export default Basket;