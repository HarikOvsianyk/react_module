import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const PrimaryButton = ({children, ...props}) => {
    return (
    <Stack spacing={2} direction="row">
        <Button 
        variant="contained"
        type="submit"
        fullWidth
        sx={{mx: "auto"}}
        {...props}
        >{children}
        </Button>
    </Stack>
    )
};

export default PrimaryButton;