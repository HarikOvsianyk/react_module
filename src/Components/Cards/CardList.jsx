import React from 'react';
import {MovieCard} from './MovieCard';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';

export const CardList = () => {
    const user = useSelector(state => state.user);
    console.log(user);
    return (
        <Container maxWidth="xl" sx={{mt:5, mb:5 ,display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap'}}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </Container>
    )
}