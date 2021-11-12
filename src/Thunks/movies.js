import { fetchMovies, fetchSearch, getDetails,setFavourite, getFavourite,getGenresList,getLanguagesList } from "../Apis";
import {
  fetchMoviesSuccess,
  fetchSearchSuccess,
  getDetailsSuccess,
  getFavouritesSuccess,
  getGenresListSuccess,
  getLanguagesListSuccess
} from "../Store/Actions/movies";
import { onLoader, offLoader } from "../Store/Actions";

export const fetchMoviesAsync = (page = 1) => {
  return async (dispatch) => {
    dispatch(onLoader());
    const movies = await fetchMovies(page);
    dispatch(fetchMoviesSuccess(movies));
    dispatch(offLoader());
  };
};

export const fetchSearchAsync = (search) => {
  return async (dispatch) => {
    dispatch(onLoader());
    const movies = await fetchSearch(search);
    dispatch(fetchSearchSuccess(movies));
    dispatch(offLoader());
  };
};

export const getDetailsAsync = (id) => {
  return async (dispatch) => {
    dispatch(onLoader());
    const movie = await getDetails(id);
    dispatch(getDetailsSuccess(movie));
    dispatch(offLoader());
  };
};

export const setFavouriteAsync = (sessionId, accountId, id) => {
  return async (dispatch) => {
    const favourite = await setFavourite(sessionId, accountId, id);
    console.log(favourite);
  }
};

export const getFavouritesAsync = (accountId, sessionId) => {
  return async (dispatch) => {
    dispatch(onLoader());
    const movies = await getFavourite(accountId, sessionId);
    dispatch(getFavouritesSuccess(movies.results));
    dispatch(offLoader());
  }
};

export const getGenresListAsync = () => {
  return async (dispatch) => {
    const genres = await getGenresList();
    dispatch(getGenresListSuccess(genres.genres));
  }
};

export const getLanguagesListAsync = () => {
  return async (dispatch) => {
    const langauges = await getLanguagesList();
    dispatch(getLanguagesListSuccess(langauges));
  }
};

