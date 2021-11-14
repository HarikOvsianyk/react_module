import { movieAction } from "../Actions/movies";

export const initialState = {
  movies: [],
  isFetchMovies: false,
  page: 1,
  searchMovies: [],
  searchAction: false,
  search: "",
  getDetails: {},
  favourites: [],
  isFavourites: false,
  genresList: [],
  languagesList: [],
  discoverMovies: [],
  isDiscoverMovies: false,
};

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case movieAction.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
        isFetchMovies: true,
        isFavourites: false,
      };
    case movieAction.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchMovies: action.payload.movies,
        searchAction: true,
        isDiscoverMovies: false,
        isFetchMovies: false,
      };
    case movieAction.CHANGE_SEARCH_ACTIONS:
      return {
        ...state,
        searchAction: false,
        isDiscoverMovies: false,
      };
    case movieAction.SET_SEARCH_DATA:
      return {
        ...state,
        search: action.payload,
      };
    case movieAction.GET_DETAILS_SUCCESS:
      return {
        ...state,
        getDetails: action.payload.movie,
      };
    case movieAction.GET_FEVOURITES_SUCCESS:
      return {
        ...state,
        favourites: action.payload,
        isFavourites: true,
      };
    case movieAction.GET_GENRES_LIST_SUCCESS:
      return {
        ...state,
        genresList: action.payload.genres,
      };
    case movieAction.GET_LANGUAGES_LIST_SUCCESS:
      return {
        ...state,
        languagesList: action.payload,
      };
    case movieAction.GET_MOVIES_DISCOVER_SUCCESS:
      return {
        ...state,
        discoverMovies: action.payload.movies,
        searchAction: false,
        isFetchMovies: false,
        isDiscoverMovies: true,
      };
    case movieAction.SET_PAGE:
      return {
        ...state,
        page: action.payload.page,
      };
    default:
      return state;
  }
}
