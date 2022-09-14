import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import StyledOrderConfirmation from './OrderConfirmation.style';

import { CartItem, reset } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';

import Button from '../../components/Button/Button';

const OrderConfirmation = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const items = useSelector((state: RootState) => state.cart.orderedItems);
    const totalCost = items.reduce((a, c: CartItem) => {
        return a + c.qty * c.item.price;
    }, 0);
    const costString = totalCost.toFixed(2);

    const onContinue = () => {
        dispatch(reset());
        history.push('/');
    }

    return (
        <StyledOrderConfirmation>
            <div><strong>Order Successful!</strong></div>
            <table>
                <thead>
                    <tr>
                        <th style={{width: '300px'}}>Product</th>
                        <th style={{width: '60px'}}>Quantity</th>
                        <th style={{width: '100px'}}>Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map((item: CartItem) => {
                        return (<tr key={item.item.id}>
                            <td>{item.item.name}</td>
                            <td>{item.qty}</td>
                            <td>£{item.item.price * item.qty}</td>
                        </tr>)
                    })
                }
                    <tr>
                        <td colSpan={2} style={{textAlign: 'right'}}>Total Cost:</td>
                        <td>£{costString}</td>
                    </tr>
                </tbody>
            </table>
            <Button label='Continue Shopping' onClick={onContinue}/>
        </StyledOrderConfirmation>
    );
}

export default OrderConfirmation;