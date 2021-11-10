export const movieAction = {
    FETCH_MOVIES_SUCCESS : '[MOVIE] Fetch movies success',
	FETCH_SEARCH_SUCCESS: '[MOVIE] Fetch search'
}

export const fetchMoviesSuccess = (movies) => ({
	type: movieAction.FETCH_MOVIES_SUCCESS,
	payload: { movies },
});


export const fetchSearchSuccess = (movies) => ({
	type: movieAction.FETCH_SEARCH,
	payload: { movies },
});
