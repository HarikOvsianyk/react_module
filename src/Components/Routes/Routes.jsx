import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { allRoutes } from "./allRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export const Routes = () => {
  return (
    <Switch>
      {allRoutes.map((route, i) =>
        route.isPrivate ? (
          <PrivateRoutes
            key={i}
            path={route.path}
            component={route.component}
          />
        ) : (
          <Route key={i} path={route.path} component={route.component} exact />
        )
      )}

      <Redirect to="/error" />
    </Switch>
  );
};
