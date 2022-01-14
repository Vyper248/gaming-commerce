import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import Header from './components/Header';
import Container from './components/Container';

import Homepage from './pages/Homepage';
import CategoryPage from './pages/CategoryPage';
import Shop from './pages/Shop';
import SignInAndRegister from './pages/SignInAndRegister';

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	let unsubscribeFromAuth = null;

	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			setCurrentUser(user);
			console.log(user);
		});

		return () => {
			unsubscribeFromAuth();
		}
	}, []);

	return (
		<div className="App">
			<Header currentUser={currentUser}/>
			<Container>
				<Route exact path='/' component={Homepage}/>
				<Route exact path='/Shop' component={Shop}/>
				<Route exact path='/Shop/:Category' component={CategoryPage}/>
				<Route exact path='/SignIn' component={SignInAndRegister}/>
			</Container>
		</div>
	);
}

export default App;
