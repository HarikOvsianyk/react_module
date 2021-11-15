import { MainPage } from "../Pages/MainPage";
import { LogInPage } from "../Pages/LogInPage";
import { SignUpPage } from "../Pages/SignUpPage";
import { ErrorPage } from "../Pages/ErrorPage";
import { ProfilePage } from "../Pages/ProfilePage";
import { MoviePage } from "../Pages/MoviePage";
import {FavouritesPage} from '../Pages/FavouritesPage';

export const allRoutes = [
  { path: "/", component: LogInPage },
  { path: "/main", component: MainPage, isPrivate: true },
  { path: "/profile", component: ProfilePage, isPrivate: true },
  { path: "/movie/:id", component: MoviePage, isPrivate: true },
  { path: "/favourites", component: FavouritesPage, isPrivate: true },
  { path: "/registration", component: SignUpPage },
  { path: "/error", component: ErrorPage },
];
