import { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { auth,  createUseProfileDocument} from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';

import Header from './components/Header';
import Container from './components/Container';

import Homepage from './pages/Homepage';
import CategoryPage from './pages/CategoryPage';
import Shop from './pages/Shop';
import SignInAndRegister from './pages/SignInAndRegister';

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		let unsubscribeFromSnapshot = null;
		let unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (!userAuth) {
				setCurrentUser(null);
				return;
			}

			let userRef = await createUseProfileDocument(userAuth);
			unsubscribeFromSnapshot = onSnapshot(userRef, snapshot => {
				setCurrentUser({id: snapshot.id, ...snapshot.data()});
			});
		});

		return () => {
			unsubscribeFromAuth();
			if (unsubscribeFromSnapshot) unsubscribeFromSnapshot();
		}
	}, []);

	return (
		<div className="App">
			<Header currentUser={currentUser}/>
			<Container>
				<Route exact path='/' component={Homepage}/>
				<Route exact path='/Shop' component={Shop}/>
				<Route exact path='/Shop/:Category' component={CategoryPage}/>
				<Route exact path='/SignIn' render={() => currentUser ? <Redirect to='/'/> : <SignInAndRegister/>}/>
			</Container>
		</div>
	);
}

export default App;
