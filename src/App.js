import { Route } from 'react-router-dom';

import Header from './components/Header';
import Container from './components/Container';

import Homepage from './pages/Homepage';
import CategoryPage from './pages/CategoryPage';
import Shop from './pages/Shop';
import SignInAndRegister from './pages/SignInAndRegister';

function App() {
  return (
    <div className="App">
      <Header/>
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
