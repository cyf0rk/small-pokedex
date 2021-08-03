import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Pokedex from './components/Pokedex/Pokedex';
import Homepage from './components/Homepage/Homepage';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/pokedex'>
            <Pokedex />
          </Route>
          <Route path='/'>
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
