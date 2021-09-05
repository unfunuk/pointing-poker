import React from "react";
import { Route, Switch } from "react-router-dom";
import ROUTES from "./routes/routes";

function App(): JSX.Element {
  return (
    <div>
      <Switch>
        {ROUTES.map((route) => (
          <Route
            key={route.key}
            exact
            path={route.path}
            component={route.component}
          ></Route>
        ))}
      </Switch>
    </div>
  );
}

export default App;
