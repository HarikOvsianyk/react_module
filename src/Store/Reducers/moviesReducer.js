import { movieAction } from "../Actions/movies";

export const initialState = {
  movies: [],
  searchMovies: [],
  searchAction: false,
  getDetails: {},
  favourites: [],
};

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case movieAction.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
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
        console.log(action.payload);
        return {
          ...state,
          favourites: action.payload,
        };
    default:
      return state;
  }
}
