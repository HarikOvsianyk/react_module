import React from 'react';
import Container from '@mui/material/Container';
import {LogIn} from '../Components/LogIn/LogIn';


export const LogInPage = () => {
    return (
            <Container maxWidth="xl" sx={{mt:25, mb:5}}>
                <LogIn />
            </Container>
    )
};
