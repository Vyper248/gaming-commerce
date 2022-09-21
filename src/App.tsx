import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Collections, setCollections, setLoading } from './redux/shopSlice';
import { RootState } from './redux/store';

import { subscribeToCategoriesAndItems, subscribeToUserAuth } from './firebase/firebase.utils';
import { Unsubscribe } from 'firebase/firestore';

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import CartDropdown from './components/CartDropdown/CartDropdown';

import Homepage from './pages/Homepage/Homepage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Shop from './pages/Shop/Shop';
import SignInAndRegister from './pages/SignInAndRegister/SignInAndRegister';
import Basket from './pages/Basket/Basket';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';

function App() {
	const currentUser = useSelector((state: RootState) => state.user.currentUser);
	const orderedItems = useSelector((state: RootState) => state.cart.orderedItems);
	const dispatch = useDispatch();

	useEffect(() => {
		let unsubscribeFromCategories: Unsubscribe | undefined;
		let unsubscribeFromSnapshot: Unsubscribe | undefined;
		let unsubscribeFromAuth: Unsubscribe | undefined;

		const subscribe = async () => {
			[unsubscribeFromSnapshot, unsubscribeFromAuth] = await subscribeToUserAuth(dispatch);
		}
		subscribe();

		// // Subscribe to listener for Categories and Items.
		// dispatch(setLoading(true));
		// let handleDataChanges = (categories: Collections) => {
		// 	dispatch(setCollections(categories));
		// 	dispatch(setLoading(false));
		// }
		// unsubscribeFromCategories = subscribeToCategoriesAndItems(handleDataChanges);

		return () => {
			if (unsubscribeFromCategories) unsubscribeFromCategories();
			if (unsubscribeFromSnapshot) unsubscribeFromSnapshot();
			if (unsubscribeFromAuth) unsubscribeFromAuth();
		}
	}, [dispatch]);

	return (
		<div className="App">
			<Header/>
			<CartDropdown/>
			<Container>
				<Route exact path='/' component={Homepage}/>
				<Route exact path='/Shop' component={Shop}/>
				<Route exact path='/Shop/:Category' component={CategoryPage}/>
				<Route exact path='/SignIn' render={() => currentUser ? <Redirect to='/'/> : <SignInAndRegister/>}/>
				<Route exact path='/Basket' component={Basket}/>
				<Route exact path='/Confirmation' render={() => orderedItems.length > 0 ? <OrderConfirmation/> : <Redirect to='/'/>}/>
			</Container>
		</div>
	);
}

export default App;
