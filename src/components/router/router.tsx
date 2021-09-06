import React from "react";
import { Route, Switch } from "react-router-dom";
import ROUTES from "./constants";

function Router(): JSX.Element {
  return (
    <Switch>
      {ROUTES.map(({ key, path, component }) => (
        <Route key={key} exact path={path} component={component}></Route>
      ))}
    </Switch>
  );
}

export default Router;
