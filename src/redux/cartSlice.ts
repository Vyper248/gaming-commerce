import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item } from './shopSlice';

type SliceState = {
    open: boolean;
    items: CartItem[];
    orderedItems: DisplayCartItem[];
}

export type CartItem = {
    id: number;
    qty: number;
}

export type DisplayCartItem = {
    item: Item;
    qty: number;
}

const initialState = {
    open: false,
    items: [],
    orderedItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state: SliceState) => {
            state.open = !state.open;
        },
        addItem: (state: SliceState, action: PayloadAction<CartItem>) => {
            let existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.qty++;
            } else {
                state.items.push(action.payload);
            }
            state.orderedItems = [];
        },
        increaseQty: (state: SliceState, action: PayloadAction<Item>) => {
            let existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) existingItem.qty++;
        },
        decreaseQty: (state: SliceState, action: PayloadAction<Item>) => {
            let existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem && existingItem.qty > 1) existingItem.qty--;
        },
        removeItem: (state: SliceState, action: PayloadAction<Item>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        placeOrder: (state: SliceState, action: PayloadAction<DisplayCartItem[]>) => {
            state.orderedItems = action.payload;
            state.items = [];
        },
        reset: (state: SliceState) => {
            state.items = [];
            state.orderedItems = [];
        }
    }
});

export const { toggleCart, addItem, removeItem, increaseQty, decreaseQty, placeOrder, reset } = cartSlice.actions;

export default cartSlice.reducer;