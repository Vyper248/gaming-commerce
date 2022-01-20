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
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    }
});

export const { toggleCart, addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;