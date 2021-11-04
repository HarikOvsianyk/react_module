import axios from  'axios';

export const API = 'https://api.themoviedb.org/3';
export const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';

export const authAxios = axios.create({
    baseURL: API,
    params: {
        api_key: process.env.REACT_APP_API_KEY,
    } 
});

export const getMovie = async (movieId) => {
    const {data} = await axios.get(`/movie/${movieId}`);
    return data;
};


