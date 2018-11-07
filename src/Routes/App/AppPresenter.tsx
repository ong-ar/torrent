import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
