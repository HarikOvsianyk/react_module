import axios from "axios";
export const API = "https://api.themoviedb.org/3";

export const authAxios = axios.create({
  baseURL: API,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

console.log(process.env.REACT_APP_API_KEY);

export const fetchMovies = async (page) => {
  const { data } = await authAxios.get("/movie/popular", {
    params: {
      page: page,
    },
  });
  return data;
};

export const fetchSearch = async (search, page) => {
  const { data } = await authAxios.get("/search/movie", {
    params: {
      query: search,
      page: page,
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
      media_type: "movie",
      media_id: id,
      favorite: true,
    },
    {
      params: {
        session_id: sessionId,
      },
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
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

export const getGenresList = async () => {
  const { data } = await authAxios.get("/genre/movie/list");
  return data;
};

export const getLanguagesList = async () => {
  const { data } = await authAxios.get("/configuration/languages");
  return data;
};

export const getDiscoverMovies = async (genre, langauge, year, page) => {
  let { data } = await authAxios.get("/discover/movie", {
    params: {
      sort_by: "popularity.desc",
      with_genres: genre,
      with_original_language: langauge,
      primary_release_year: year,
      page: page,
    },
  });
  return data;
};
