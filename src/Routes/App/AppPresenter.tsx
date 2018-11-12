import "core-js/es6/number";
import "core-js/es7/array";
import "es6-shim";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "url-search-params-polyfill";
import Home from "../Home";
import Search from "../Search";

const AppPresenter: React.SFC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

const Routes: React.SFC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={Home} />
    <Route path={"/search"} exact={true} component={Search} />
  </Switch>
);

export default AppPresenter;
