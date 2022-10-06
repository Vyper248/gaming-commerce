import { createSelector } from '@reduxjs/toolkit';
import { CartItem } from './cartSlice';
import { RootState } from './store';

const selectCartItems = (state: RootState) => state.cart.items;

export const selectTotalCost = createSelector(selectCartItems, (items) => {
    return items.reduce((a, c: CartItem) => {
        return a + (c.qty * c.item.price);
    }, 0);
});