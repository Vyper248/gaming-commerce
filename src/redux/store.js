import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import cartReducer from './cartSlice';


const localStorageMiddleware = ({getState}) => next => action => {
	const result = next(action);

	let blacklist = ['user/setUser'];
	if (blacklist.includes(action.type)) return result;

	localStorage.setItem('gameCommerceState', JSON.stringify(getState()));
	return result;
};

const reHydrateStore = () => {
	if (localStorage.getItem('gameCommerceState') !== null) {
		return JSON.parse(localStorage.getItem('gameCommerceState'));
	}
};

export const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
	},
	preloadedState: reHydrateStore(),
  	middleware: getDefaultMiddleware =>
    	getDefaultMiddleware().concat(localStorageMiddleware),
})