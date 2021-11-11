export const movieAction = {
    FETCH_MOVIES_SUCCESS : '[MOVIE] Fetch movies success',
	FETCH_SEARCH_SUCCESS: '[MOVIE] Fetch search',
	CHANGE_SEARCH_ACTION: '[MOVIE] Change search action',
	GET_DETAILS_SUCCESS: '[MOVIE] Get more details',
}

export const fetchMoviesSuccess = (movies) => ({
	type: movieAction.FETCH_MOVIES_SUCCESS,
	payload: { movies },
});


export const fetchSearchSuccess = (movies) => ({
	type: movieAction.FETCH_SEARCH_SUCCESS,
	payload: { movies },
});

export const changeSearchAction = () => ({
	type: movieAction.CHANGE_SEARCH_ACTION,
});

export const getDetailsSuccess = (movie) => ({
	type: movieAction.GET_DETAILS_SUCCESS,
	payload: {movie},
})