import {movieAction} from "../Actions/movies";

export const initialState = {
    movies:[],
    searchMovies: [],
    searchAction: false,
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
                    searchAction: true,
                };
        case movieAction.CHANGE_SEARCH_ACTION: 
                return {
                    ...state,
                    searchAction: false,
                }
        default:
            return state;
    }
}