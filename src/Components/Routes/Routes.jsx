import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { MainPage } from "../../Pages/MainPage";
import { LogInPage } from "../../Pages/LogInPage";
import { SignUpPage } from "../../Pages/SignUpPage";
import { ErrorPage } from "../../Pages/ErrorPage";
import { ProfilePage } from "../../Pages/ProfilePage";
import { MoviePage } from "../../Pages/MoviePage";
import {FavouritesPage} from '../../Pages/FavouritesPage';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path= {"/"} component={LogInPage} />
      <Route  path= {"/main"} component={MainPage} />
      <Route  path= {"/profile"} component={ProfilePage} />
      <Route  path= {"/movie/:id"} component={MoviePage} />
      <Route  path= {"/favourites"} component={FavouritesPage} />
      <Route  path= {"/registration"} component={SignUpPage} />
      <Route  path= {"/error"} component={ErrorPage} />
      <Redirect to="/error" />
    </Switch>
  );
};
