import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../redux/cartSlice';

import Button from '../components/Button/Button';

const StyledComp = styled.div`
    text-align: center;

    & > table {
        margin: auto;
        margin-bottom: 20px;
        border-collapse: collapse;

        & th {
            font-weight: bold;
            height: 50px;
        }

        & th:first-child,
        & td:first-child {
            text-align: left;
        }

        & > thead > tr,
        & > tbody tr {
            border-bottom: 1px solid gray;
        }

        & > tbody td:nth-child(2) {
            padding: 10px;
            text-align: center;
        }

        & > tbody td:last-child {
            padding-right: 0px;
            text-align: right;
        }

        & > tbody > tr:last-child {
            border-bottom: none;
            font-weight: bold;
        }
    }
`

const OrderConfirmation = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const items = useSelector(state => state.cart.orderedItems);
    const totalCost = items.reduce((a, c) => {
        return a + c.qty * c.item.price;
    }, 0);
    const costString = totalCost.toFixed(2);

    const onContinue = () => {
        dispatch(reset());
        history.push('/');
    }

    return (
        <StyledComp>
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
                    items.map(item => {
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
        </StyledComp>
    );
}

export default OrderConfirmation;