import {fetchMovies, fetchSearch} from '../Apis';
import { fetchMoviesSuccess, fetchSearchSuccess } from '../Store/Actions/movies';
import {onLoader, offLoader} from '../Store/Actions';


export const fetchMoviesAsync = (page = 1) => {
    return async (dispatch) => {
        dispatch(onLoader());
        const movies = await fetchMovies(page);
        dispatch(fetchMoviesSuccess(movies));
        dispatch(offLoader());
    }
};

export const fetchSearchAsync = (search) => {
    return async (dispatch) => {
        dispatch(onLoader());
        const movies = await fetchSearch(search);
        dispatch(fetchSearchSuccess(movies));
        dispatch(offLoader());
    }
}