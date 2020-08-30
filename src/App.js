import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from './pages/Landing';
import WishListPage from './pages/WishList';
import AccountPage from './pages/Account';
import HomePage from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WishListPage} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/shop" component={HomePage} />
        <Route path="/details" component={ProductDetails} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
