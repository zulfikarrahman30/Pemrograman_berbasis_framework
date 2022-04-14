import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/navbar/Navbar';
import Products from './pages/Products/Products';
import Cart from './pages/Products/Cart';
import Profil from './pages/Profil';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/profile' component={Profil} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
