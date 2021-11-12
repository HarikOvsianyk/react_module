import { movieAction } from "../Actions/movies";

export const initialState = {
  movies: [],
  searchMovies: [],
  searchAction: false,
  getDetails: {},
  favourites: [],
  isFavourites: false,
  genresList: [],
  languagesList: [],
  isMoviesByGenre: false,
  moviesByGenre: [],
  isMoviesByLanguage: false,
  moviesByLanguage: [],
  isMoviesByYear: false,
  moviesByYear: [],
};

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case movieAction.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
        isFavourites: false,
      };
    case movieAction.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchMovies: action.payload.movies,
        searchAction: true,
      };
    case movieAction.CHANGE_SEARCH_ACTION:
      return {
        ...state,
        searchAction: false,
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
    case movieAction.GET_MOVIES_BY_GENRE_SUCCESS:
      return {
        ...state,
        moviesByGenre: action.payload.movies,
        isMoviesByGenre: true,
      };
      case movieAction.GET_MOVIES_BY_LANGUAGE_SUCCESS:
        return {
          ...state,
          moviesByLanguage: action.payload.movies,
          isMoviesByLanguage: true,
        };
        case movieAction.GET_MOVIES_BY_YEAR_SUCCESS:
          return {
            ...state,
            moviesByYear: action.payload.movies,
            isMoviesByYear: true,
          };
    default:
      return state;
  }
}
