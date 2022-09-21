import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { setUser } from './redux/userSlice';
import { setCollections, setLoading } from './redux/shopSlice';

import { auth,  createUseProfileDocument, subscribeToCategoriesAndItems } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';

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
	const currentUser = useSelector(state => state.user.currentUser);
	const orderedItems = useSelector(state => state.cart.orderedItems);
	const dispatch = useDispatch();

	useEffect(() => {
		let unsubscribeFromSnapshot = null;
		let unsubscribeFromCategories = null;

		let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (!userAuth) {
				dispatch(setUser(null));
				return;
			}

			let userRef = await createUseProfileDocument(userAuth);
			unsubscribeFromSnapshot = onSnapshot(userRef, snapshot => {
				dispatch(setUser({id: snapshot.id, ...snapshot.data()}));
			});
		});

		// // Subscribe to listener for Categories and Items.
		// dispatch(setLoading(true));
		// let handleDataChanges = (categories) => {
		// 	dispatch(setCollections(categories));
		// 	dispatch(setLoading(false));
		// }
		// unsubscribeFromCategories = subscribeToCategoriesAndItems(handleDataChanges);

		return () => {
			unsubscribeFromAuth();
			if (unsubscribeFromSnapshot) unsubscribeFromSnapshot();
			if (unsubscribeFromCategories) unsubscribeFromCategories();
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
