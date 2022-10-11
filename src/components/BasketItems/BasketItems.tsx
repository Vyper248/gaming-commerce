import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from 'react-icons/fa';
import { useQuery } from "@apollo/client";

import StyledDropdownItems, { StyledImage, StyledBasket } from './BasketItems.style';

import { CartItem as CartItemType, DisplayCartItem, increaseQty, decreaseQty, removeItem, setCheckoutData } from "../../redux/cartSlice";
import { selectCartIds } from "../../redux/selectors";
import { RootState } from "../../redux/store";

import { GET_CART_ITEMS } from "../../utils/gql/gql.categories";
import { getDisplayCartItems } from "../../utils/gql/gql.utils";

import CartItem from '../CartItem/CartItem';
import Spinner from '../Spinner/Spinner';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import IconButton from '../../components/IconButton/IconButton';

type BasketItemsProps = {
    type: 'basket' | 'dropdown' | 'checkout';
}

const BasketRow = ({ item, qty }: DisplayCartItem) => {
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increaseQty(item));
    const onDecrease = () => dispatch(decreaseQty(item));
    const onRemove = () => dispatch(removeItem(item));

    return (<tr>
        <td><StyledImage imageURL={item.imageURL} /></td>
        <td>{item.name}</td>
        <td><QuantitySelector qty={qty} onIncrease={onIncrease} onDecrease={onDecrease} /></td>
        <td>£{(item.price * qty).toFixed(2)}</td>
        <td><IconButton Icon={FaTrashAlt} onClick={onRemove} /></td>
    </tr>)
}

const CheckoutRow = ({ item, qty }: DisplayCartItem) => {
    return (<tr>
        <td><StyledImage imageURL={item.imageURL} style={{height: '50px'}}/></td>
        <td>{item.name}</td>
        <td>{qty}</td>
        <td>£{item.price}</td>
    </tr>)
}

const BasketItems = ({type}: BasketItemsProps) => {
    const dispatch = useDispatch();

    const cartItems: CartItemType[] = useSelector((state: RootState) => state.cart.items);
    const cartItemIds = useSelector(selectCartIds);
    const [items, setItems] = useState([] as DisplayCartItem[]);
    const [totalCost, setTotalCost] = useState(0);

    const { loading, error, data } = useQuery(GET_CART_ITEMS, { variables: { ids: cartItemIds }, fetchPolicy: 'no-cache'});

    useEffect(() => {
        if (data) {
            let displayCartItems = getDisplayCartItems(cartItems, data.cartItems);
            setItems(displayCartItems);

            let totalCostValue = displayCartItems.reduce((a, c: DisplayCartItem) => {
                return a + (c.qty * c.item.price);
            }, 0);
    
            setTotalCost(totalCostValue);

            //Checkout component needs this data too
            if (type === 'checkout') {
                dispatch(setCheckoutData({
                    items: displayCartItems,
                    price: totalCostValue
                }));
            }
        }
    }, [data, cartItems, dispatch, type]);

    if (error) return <p>Error getting cart items - {error.message}</p>;

    if (type === 'dropdown') {
        return (
            <Spinner isLoading={loading}>
                <StyledDropdownItems id='cartItems'>
                    { items.map((item: DisplayCartItem) => <CartItem key={item.item.id} cartItem={item}/>) }
                    { cartItems.length === 0 ? <div className='empty'>Your basket is empty</div> : null }
                </StyledDropdownItems>
            </Spinner>
        );
    }

    if (type === 'basket' || type === 'checkout') {
        return (
            <Spinner isLoading={loading}>
                <StyledBasket>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                { type === 'basket' ? <th>Remove</th> : null }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item: DisplayCartItem) => {
                                    return type === 'basket' 
                                        ? <BasketRow key={item.item.id} item={item.item} qty={item.qty} />
                                        : <CheckoutRow key={item.item.id} item={item.item} qty={item.qty} />
                                })
                            }
                        </tbody>
                    </table>
                    <div className='totalCost'>
                        TOTAL: £{totalCost.toFixed(2)}
                    </div>
                </StyledBasket>
            </Spinner>
        );
    }

    return (
        <div>

        </div>
    );
}

export default BasketItems;