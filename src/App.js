import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Pokedex from './components/Pokedex/Pokedex';
import Homepage from './components/Homepage/Homepage';

import PokemonsProvider from './common/context/PokemonsContext';

import { AppStyled, PageContainer } from './AppStyled';

function App() {
  return (
    <Router>
      <AppStyled>
        <NavBar />
        <PokemonsProvider>
          <PageContainer>
            <Switch>
              <Route path='/pokedex'>
                <Pokedex />
              </Route>
              <Route path='/'>
                <Homepage />
              </Route>
            </Switch>
          </PageContainer>
        </PokemonsProvider>
      </AppStyled>
    </Router>
  );
}

export default App;
