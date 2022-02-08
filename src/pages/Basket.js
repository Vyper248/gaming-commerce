import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeItem } from '../redux/cartSlice';
import { FaTrashAlt } from 'react-icons/fa';

import QuantitySelector from '../components/QuantitySelector';
import IconButton from '../components/IconButton';
import StripeButton from '../components/StripeButton';

const StyledComp = styled.div`
    width: 780px;
    margin: auto;
    margin-bottom: 30px;

    & > table {
        margin: auto;
        border-collapse: collapse;

        & th {
            width: 190px;
            font-weight: bold;
            height: 50px;
        }

        & th:first-child {
            width: 150px;
            text-align: left;
        }

        & th:last-child {
            width: 60px;
        }

        & > thead > tr {
            border-bottom: 1px solid gray;
        }

        & > tbody td:not(:first-child) {
            padding: 10px;
            text-align: center;
        }

        & > tbody tr {
            border-bottom: 1px solid gray;
        }
    }

    & > .totalCost {
        text-align: right;
        padding: 20px 0px;
        font-size: 2em;
    }

    & > #stripeDetails {
        color: Red;
        margin-bottom: 10px;
        text-align: right;
    }
`

const StyledImage = styled.div`
    background-image: url('${props => props.imageURL}');
    background-size: cover;
    background-position: center;
    filter: brightness(0.96);
    width: 100%;
    height: 180px;
    margin: 10px 10px 10px 0px;
`;

const BasketRow = ({item, qty}) => {
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
    const items = useSelector(state => state.cart.items);
    const totalCost = items.reduce((a, c) => {
        return a + c.qty * c.item.price;
    }, 0);
    const costString = totalCost.toFixed(2);

    return (
        <StyledComp>
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
                    items.map(item => {
                        return <BasketRow key={item.item.id} item={item.item} qty={item.qty}/>
                    })
                }
                </tbody>
            </table>
            <div className='totalCost'>
                TOTAL: £{costString}
            </div>
            <div id='stripeDetails'>
                Please use the following test details for payment: <br/>
                Card Number: 4242 4242 4242 4242 <br/>
                Date: Any future date, CVV: Any 3 digit number
            </div>
            <StripeButton price={costString}/>
        </StyledComp>
    );
}

export default Basket;