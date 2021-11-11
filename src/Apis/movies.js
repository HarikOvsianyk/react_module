import axios from "axios";
export const API = "https://api.themoviedb.org/3";

export const authAxios = axios.create({
  baseURL: API,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export const fetchMovies = async (page) => {
	const {data} = await authAxios.get('/movie/popular', {
		params: {
			page: page,
		},
	});
	return data;
};

export const fetchSearch = async (search) => {
		const {data} = await authAxios.get('/search/movie', {
			params: {
				query: search,
			},
		});
		return data;
	}