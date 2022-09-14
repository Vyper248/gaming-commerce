import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';

import StyledBasket, { StyledImage } from './Basket.style';

import { RootState } from '../../redux/store';
import { increaseQty, decreaseQty, removeItem, CartItem } from '../../redux/cartSlice';

import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import IconButton from '../../components/IconButton/IconButton';
import StripeButton from '../../components/StripeButton/StripeButton';

const BasketRow = ({item, qty}: CartItem) => {
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increaseQty(item));
    const onDecrease = () => dispatch(decreaseQty(item));
    const onRemove = () => dispatch(removeItem(item));

    return (<tr>
        <td><StyledImage imageURL={item.imageURL}/></td>
        <td>{item.name}</td>
        <td><QuantitySelector qty={qty} onIncrease={onIncrease} onDecrease={onDecrease}/></td>
        <td>£{item.price}</td>
        <td><IconButton Icon={FaTrashAlt} onClick={onRemove}/></td>
    </tr>)
}

const Basket = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const totalCost = items.reduce((a, c: CartItem) => {
        return a + c.qty * c.item.price;
    }, 0);
    const costString = totalCost;

    return (
        <StyledBasket>
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
                        return <BasketRow key={item.item.id} item={item.item} qty={item.qty}/>
                    })
                }
                </tbody>
            </table>
            <div className='totalCost'>
                TOTAL: £{costString.toFixed(2)}
            </div>
            <div id='stripeDetails'>
                Please use the following test details for payment: <br/>
                Card Number: 4242 4242 4242 4242 <br/>
                Date: Any future date, CVV: Any 3 digit number
            </div>
            <StripeButton price={costString}/>
        </StyledBasket>
    );
}

export default Basket;