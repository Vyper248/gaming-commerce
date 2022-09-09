import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { setUser } from './redux/userSlice';
import { setCollection, setLoading } from './redux/shopSlice';

import { auth,  createUseProfileDocument, subscribeToCollections } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';

import Header from './components/Header';
import Container from './components/Container';
import CartDropdown from './components/CartDropdown/CartDropdown';

import Homepage from './pages/Homepage';
import CategoryPage from './pages/CategoryPage';
import Shop from './pages/Shop';
import SignInAndRegister from './pages/SignInAndRegister';
import Basket from './pages/Basket';
import OrderConfirmation from './pages/OrderConfirmation';

function App() {
	const currentUser = useSelector(state => state.user.currentUser);
	const orderedItems = useSelector(state => state.cart.orderedItems);
	const dispatch = useDispatch();

	useEffect(() => {
		let unsubscribeFromSnapshot = null;
		let unsubscriptions = [];

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

		//get collections and subscribe to item lists to monitor for item changes
		//Note: only efficient for a fairly small database of items, helps save firebase allowances
		// dispatch(setLoading(true));
		// let handleDataChanges = (collectionData) => {
		// 	dispatch(setCollection({collectionData}));
		// 	dispatch(setLoading(false));
		// }
		// subscribeToCollections(unsubscriptions, handleDataChanges);

		return () => {
			unsubscribeFromAuth();
			if (unsubscribeFromSnapshot) unsubscribeFromSnapshot();
			unsubscriptions.forEach(unsubscribe => unsubscribe());
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
