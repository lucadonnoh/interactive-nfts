import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Layout
import Header from "./components/Header/Header";

// Pages
import MarketPlace from "./pages/MarketPlace/MarketPlace"
import Submit from "./pages/Submit/Submit"
import Collection from "./pages/Collection/Collection"
import NotFound from "./pages/404/NotFound"

const Routes = () => (
  <Router>
    <Route render={({ location }) => (
      <div id="app">
        <Header />
        <Switch>
          <Route path="/collection" component={Collection} />
          <Route path="/submit" component={Submit} />
          <Route path="/" exact component={MarketPlace} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>)}
    />
  </Router>
);

export default Routes;
