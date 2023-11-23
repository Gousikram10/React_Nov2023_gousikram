// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import Product from './components/Product';
import Cart from './components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/products" component={Product} />
          <Route path="/cart" component={Cart} />
          {/* Add other routes as needed */}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
