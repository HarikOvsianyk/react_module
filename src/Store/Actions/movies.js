export const movieAction = {
	FETCH_MOVIES_SUCCESS: '[movie] - fetch movies success',
	FETCH_SEARCH_SUCCESS: '[movie] - fetch search',
	CHANGE_SEARCH_ACTIONS: '[movie] - change search action',
	GET_DETAILS_SUCCESS: '[movie] - get more details',
	GET_FEVOURITES_SUCCESS: '[movie] - get fevourites success',
	GET_GENRES_LIST_SUCCESS: '[movie] - get genres list success',
	GET_LANGUAGES_LIST_SUCCESS: '[movie] - get languages list success',
	GET_MOVIES_DISCOVER_SUCCESS: '[movie] - get movies discover success',
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

export const changeSearchActions = () => ({
	type: movieAction.CHANGE_SEARCH_ACTIONS,
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
});

export const getGenresListSuccess = (genres) => ({
	type: movieAction.GET_GENRES_LIST_SUCCESS,
	payload: {genres},
});

export const getLanguagesListSuccess = (languages) => ({
	type: movieAction.GET_LANGUAGES_LIST_SUCCESS,
	payload: {languages},
});


export const getMoviesDiscoverSuccess = (movies) => ({
	type: movieAction.GET_MOVIES_DISCOVER_SUCCESS,
	payload: {movies},
});