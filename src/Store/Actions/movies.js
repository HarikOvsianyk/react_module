export const movieAction = {
	FETCH_MOVIES_SUCCESS: '[movie] - fetch movies success',
	FETCH_SEARCH_SUCCESS: '[movie] - fetch search',
	CHANGE_SEARCH_ACTION: '[movie] - change search action',
	GET_DETAILS_SUCCESS: '[movie] - get more details',
	GET_FEVOURITES_SUCCESS: '[movie] - get fevourites success',
	GET_GENRES_LIST_SUCCESS: '[movie] - get genres list success',
	GET_LANGUAGES_LIST_SUCCESS: '[movie] - get languages list success',
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
});

export const getGenresListSuccess = (genres) => ({
	type: movieAction.GET_GENRES_LIST_SUCCESS,
	payload: {genres},
});

export const getLanguagesListSuccess = (languages) => ({
	type: movieAction.GET_LANGUAGES_LIST_SUCCESS,
	payload: {languages},
});