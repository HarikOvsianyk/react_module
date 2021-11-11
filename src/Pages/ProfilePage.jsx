import React from 'react';
import Container from '@mui/material/Container';
import {Profile} from '../Components/Profile/Profile';


export const ProfilePage = () => {
    return (
            <Container maxWidth="xl" sx={{mt:5, mb:5, display:'flex', justifyContent:'center'}}>
                <Profile />
            </Container>
    )
};
