import React from 'react';
import Container from '@mui/material/Container';
import {SignUp} from '../Components/SignUp/SignUp';


export const SignUpPage = () => {
    return (
            <Container maxWidth="xl" sx={{mt:2}}>
                <SignUp />
            </Container>
    )
};