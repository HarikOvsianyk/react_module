import axios from "axios";
export const API = "https://api.themoviedb.org/3";

export const authAxios = axios.create({
  baseURL: API,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export const fetchMovies = async (page) => {
  const { data } = await authAxios.get("/movie/popular", {
    params: {
      page: page,
    },
  });
  return data;
};

export const fetchSearch = async (search) => {
  const { data } = await authAxios.get("/search/movie", {
    params: {
      query: search,
    },
  });
  return data;
};

export const getDetails = async (id) => {
  const { data } = await authAxios.get(`/movie/${id}`);
  return data;
};

export const setFavourite = async (sessionId, accountId, id) => {
  const { data } = await authAxios.post(
    `/account/${accountId}/favorite`,
		{
			media_type: 'movie',
			media_id: id,
			favorite: true,
		},
		{
			params: {
				session_id: sessionId,
			},
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
		},
  );
  return data;
};

export const getFavourite = async (accountId, sessionId) => {
  const { data } = await authAxios.get(
    `/account/${accountId}/favorite/movies`,
    {
      params: {
        session_id: sessionId,
      },
    }
  );
  return data;
};
