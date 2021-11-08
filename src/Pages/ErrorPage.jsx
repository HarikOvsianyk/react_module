import React from 'react';
import Container from '@mui/material/Container';
import {Error} from '../Components/Error/Error';


export const ErrorPage = () => {
    return (
            <Container maxWidth="xl" sx={{mt:5, mb:5}}>
                <Error />
            </Container>
    )
};
