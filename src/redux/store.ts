import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import cartReducer from './cartSlice';
import shopReducer from './shopSlice';

import { Middleware } from '@reduxjs/toolkit';

const localStorageMiddleware: Middleware = ({getState}) => next => action => {
	const result = next(action);

	//if the following action types are used, don't save state
	let blacklist = ['user/setUser', 'shop/setCollection'];
	if (blacklist.includes(action.type)) return result;

	//only save the following states
	let state = getState();
	let saveObj: {[key: string]: string | number | object} = {};
	let whitelist = ['cart'];
	whitelist.forEach(key => {
		saveObj[key] = state[key];
	});

	localStorage.setItem('gameCommerceState', JSON.stringify(saveObj));
	return result;
};

const reHydrateStore = () => {
	if (localStorage.getItem('gameCommerceState') !== null) {
		return JSON.parse(localStorage.getItem('gameCommerceState') || "");
	}
};

const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
		shop: shopReducer,
	},
	preloadedState: reHydrateStore(),
  	middleware: getDefaultMiddleware =>
    	getDefaultMiddleware().concat(localStorageMiddleware),
})

export type RootState = ReturnType<typeof store.getState>;

export default store;