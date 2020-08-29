import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from './pages/Shop';
import LandingPage from './pages/Landing';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/shop" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
