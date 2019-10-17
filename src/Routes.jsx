import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard';
import TollTrx from './views/TollTrx';
import IngredientRaw from './views/IngredientsRaw';
import IngredientPackage from './views/IngredientsPackage';
import StockRaw from './views/StockRaw';
import StockPackage from './views/StockPackage';
import Camera from './views/Camera';
import Maps from './views/Maps';
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/dashboard"
        />
        <Route
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Route
          component={IngredientRaw}
          exact
          path="/ingredient-raw"
        />
        <Route
          component={IngredientPackage}
          exact
          path="/ingredient-package"
        />
        <Route
          component={StockRaw}
          exact
          path="/stock-raw"
        />
        <Route
          component={StockPackage}
          exact
          path="/stock-package"
        />
        <Route
          component={TollTrx}
          exact
          path="/tolltrx"
        />
        <Route
          component={Camera}
          exact
          path="/camera"
        />
        <Route
          component={Maps}
          exact
          path="/maps"
        />
        <Route
          component={Settings}
          exact
          path="/settings"
        />
        <Route
          component={SignUp}
          exact
          path="/sign-up"
        />
        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
        <Route
          component={UnderDevelopment}
          exact
          path="/under-development"
        />
        <Route
          component={NotFound}
          exact
          path="/not-found"
        />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
