import React from 'react';
import { Stack, TextField } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';


export const DateInput = () => {
    const [value, setValue] = React.useState(new Date());

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
            <Stack sx={{width:350}}>
                    <DesktopDatePicker
                        label="Birthday date"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                        minDate={new Date("1921-06-06")}
                />
            </Stack>
        </LocalizationProvider> 
    );
};