import axios from "axios";
export const API = "https://api.themoviedb.org/3";

export const authAxios = axios.create({
  baseURL: API,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export const getMovie = async (movieId) => {
  const { data } = await authAxios.get(`/movie/${movieId}`);
  return data;
};

export const genereteToken = async () => {
  const { data: {request_token} } = await authAxios.get(`/authentication/token/new`);
  localStorage.setItem('request_token', request_token);
  return request_token;
};


export const genereteSessionId = async (request_token) => {
    const { data } = await authAxios.post(`/authentication/session/new`, {
        request_token,
    });
    return data;
  };