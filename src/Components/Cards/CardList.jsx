import React from 'react';
import {MovieCard} from './MovieCard';
import Loader from '../UI/Loader/Loader';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';

export const CardList = () => {
    const {movies} = useSelector(state => state.movies);
    const {isLoading} = useSelector(state=> state.loader);
    
    return (
        <Container maxWidth="xl" sx={{mt:5, mb:5 ,display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap'}}>
           { isLoading
           ? <Loader />
            :
            movies.results.map((movie) => {
                return <MovieCard key={movie.id} {...movie} />;
            })}
        </Container>
    )
};

