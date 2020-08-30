import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from './pages/Landing';
import AccountPage from './pages/Account';
import HomePage from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/profile" component={AccountPage} />
        <Route exact path="/details" component={ProductDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
