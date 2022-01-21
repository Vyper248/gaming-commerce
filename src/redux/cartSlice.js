import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.open = !state.open;
        },
        addItem: (state, action) => {
            let existingItem = state.items.find(item => item.item.id === action.payload.item.id);
            if (existingItem) {
                existingItem.qty++;
            } else {
                state.items.push(action.payload);
            }
        },
        increaseQty: (state, action) => {
            let existingItem = state.items.find(item => item.item.id === action.payload.id);
            if (existingItem) existingItem.qty++;
        },
        decreaseQty: (state, action) => {
            let existingItem = state.items.find(item => item.item.id === action.payload.id);
            if (existingItem && existingItem.qty > 1) existingItem.qty--;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.item.id !== action.payload.id);
        },
    }
});

export const { toggleCart, addItem, removeItem, increaseQty, decreaseQty } = cartSlice.actions;

export default cartSlice.reducer;