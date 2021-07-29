import { Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Games from './pages/Games';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/Games' component={Games}/>
    </div>
  );
}

export default App;
