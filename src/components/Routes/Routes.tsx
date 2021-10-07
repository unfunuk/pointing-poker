import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ROUTES from "./constants";

function Routes(): JSX.Element {
  return (
    <>
      <Header />
      <Switch>
        {ROUTES.map(({ key, path, component }) => (
          <Route key={key} exact path={path} component={component}></Route>
        ))}
      </Switch>
      <Footer />
    </>
  );
}

export default Routes;
