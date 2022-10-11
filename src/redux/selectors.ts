import { createSelector } from '@reduxjs/toolkit';
import { CartItem } from './cartSlice';
import { RootState } from './store';

const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartIds = createSelector(selectCartItems, (items) => {
    return items.reduce((acc, c: CartItem): number[] => {
        acc.push(c.id);
        return acc;
    }, [] as number[])
});