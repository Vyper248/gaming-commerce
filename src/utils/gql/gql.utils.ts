import { CartItem } from '../../redux/cartSlice';
import { Item } from '../../redux/shopSlice';

type obj = {
    title: string;
}

export const convertArrToObj = (arr: obj[]) => {
    if (!arr) return {};

    return arr.reduce((acc, obj) => {
        acc[obj.title] = obj;
        return acc;
    }, {} as Record<string, obj>);
}

export const getDisplayCartItems = (cartItems: CartItem[], serverCartItems: Item[]) => {
    let displayCartItems = cartItems.flatMap((cartItem: CartItem) => {
        let itemData = serverCartItems.find((obj: Item) => obj.id === cartItem.id);
        if (itemData) {
            let displayCartItem = {
                qty: cartItem.qty,
                item: itemData
            }
            return displayCartItem;
        } else {
            return [];
        }
    });

    return displayCartItems;
}