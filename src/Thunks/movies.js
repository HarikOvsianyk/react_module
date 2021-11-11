import {fetchMovies, fetchSearch,getDetails} from '../Apis';
import { fetchMoviesSuccess, fetchSearchSuccess, getDetailsSuccess} from '../Store/Actions/movies';
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
};

export const getDetailsAsync = (id) => {
    return async (dispatch) => {
        dispatch(onLoader());
        const movie = await getDetails(id);
        dispatch(getDetailsSuccess(movie));
        dispatch(offLoader());
    }
};

