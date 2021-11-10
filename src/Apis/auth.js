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

export const generateToken = async () => {
  const {
    data: { request_token },
  } = await authAxios.get('/authentication/token/new');
  return request_token;
};

export const generateSessionId = async (requestToken) => {
  const { data: session_id } = await authAxios.post(
    '/authentication/session/new',
    {
      request_token: requestToken,
    }
  );
  localStorage.setItem('session_id', session_id);
  return session_id;
};

export const getAccount = async (sessionId) => {
  const { data } = await authAxios.get('/account', {
    params: {
      session_id: sessionId,
    },
  });

  return data;
};