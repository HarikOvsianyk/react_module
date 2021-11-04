import React from 'react';
import {MovieCard} from './MovieCard';
import Container from '@mui/material/Container';

export const CardList = () => {
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