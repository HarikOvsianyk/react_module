import React from 'react';
import Container from '@mui/material/Container';
import {Session} from '../Components/Session/Session';


export const SessionPage = () => {
    return (
            <Container maxWidth="xl" sx={{mt:5, mb:5}}>
                <Session />
            </Container>
    )
};