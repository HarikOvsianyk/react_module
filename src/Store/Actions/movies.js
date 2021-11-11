export const movieAction = {
	FETCH_MOVIES_SUCCESS: '[movie] - fetch movies success',
	FETCH_SEARCH_SUCCESS: '[movie] - fetch search',
	CHANGE_SEARCH_ACTION: '[movie] - change search action',
	GET_DETAILS_SUCCESS: '[movie] - get more details',
	GET_FEVOURITES_SUCCESS: '[movie] - get fevourits success',
}

export const fetchMoviesSuccess = (movies) => ({
	type: movieAction.FETCH_MOVIES_SUCCESS,
	payload: {
		movies
	},
});


export const fetchSearchSuccess = (movies) => ({
	type: movieAction.FETCH_SEARCH_SUCCESS,
	payload: {
		movies
	},
});

export const changeSearchAction = () => ({
	type: movieAction.CHANGE_SEARCH_ACTION,
});

export const getDetailsSuccess = (movie) => ({
	type: movieAction.GET_DETAILS_SUCCESS,
	payload: {
		movie
	},
});

export const getFavouritesSuccess = (movies) => ({
	type: movieAction.GET_FEVOURITES_SUCCESS,
	payload: {movies},
})