import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {Input} from '../UI/Input';
import {PrimaryButton} from '../UI/PrimaryButton';
import {schema} from '../../Utils/validationSchema';


export const LogIn = () => {
    const {register, handleSubmit,reset, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = () => {
        reset();
    }
    return (
        <Container sx={{width: '400px'}}>
            <Typography component="h2" variant="h5">Log in user</Typography>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Input
                {...register('email')}
                id="email"
                type="email"
                label="Email"
                placeholder = "Enter your email"
                required
                error={!!errors.email}
                helperText={errors?.email?.message}
            />
            <Input
                {...register('password')}
                id="password"
                type="password"
                label="Password"
                placeholder = "Enter your password..."
                required
                autoComplete="on"
                error={!!errors.password}
                helperText={errors?.password?.message}
            />
            <PrimaryButton>Log in</PrimaryButton>
            </form>
        </Container>
    )
    
};