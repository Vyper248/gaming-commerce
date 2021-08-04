import { Route } from 'react-router-dom';

import Header from './components/Header';
import Container from './components/Container';

import Homepage from './pages/Homepage';
import Games from './pages/Games';
import Shop from './pages/Shop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/Shop' component={Shop}/>
        <Route exact path='/Shop/Games' component={Games}/>
      </Container>
    </div>
  );
}

export default App;
