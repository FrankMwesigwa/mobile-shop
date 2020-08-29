import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/Shop'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/details" component={ProductDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
