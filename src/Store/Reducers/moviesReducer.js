import {movieAction} from "../Actions/movies";

export const initialState = {
    movies:[],
    searchMovies: [],
};

export function moviesReducer (state=initialState, action) {
    switch(action.type) {
        case movieAction.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload.movies,
            };
        case movieAction.FETCH_SEARCH_SUCCESS:
                return {
                    ...state,
                    searchMovies: action.payload.movies,
                };
        default:
            return state;
    }
}