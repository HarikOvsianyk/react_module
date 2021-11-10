import React, {useEffect} from 'react';
import {MovieCard} from './MovieCard';
import Loader from '../UI/Loader/Loader';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';
import {fetchMoviesAsync} from '../../Thunks';

export const CardList = () => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector(state=> state.loader);
    const {movies} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(fetchMoviesAsync());
      }, [dispatch]);      
      
    return (
        <Container maxWidth="xl" sx={{mt:5, mb:5 ,display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap'}}>
           {isLoading
           ?
           <Loader />
           :
           movies.results &&
               movies.results.map((movie) => {
                return <MovieCard key={movie.id} {...movie} />;
            })
           }
        </Container>
    )
};

