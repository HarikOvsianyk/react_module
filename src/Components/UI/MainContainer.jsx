import React from 'react';
import Container from '@mui/material/Container';

export const MainContainer = ({children, ...props}) => {
    return (
        <React.Fragment>
            <Container 
                maxWidth="xl"
                {...props}>
                {children}
            </Container>
        </React.Fragment>
    );
};