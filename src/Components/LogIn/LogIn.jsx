import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {Form} from '../UI/Form';
import {Input} from '../UI/Input';
import {PrimaryButton} from '../UI/PrimaryButton';
import {useHistory} from 'react-router-dom';
import {logIn} from '../../Store/Actions';
import {useDispatch} from 'react-redux';

export const schema = yup.object().shape({
    email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
    password: yup
    .string()
    .min(6)
    .required('Password is required field'),
});

export const LogIn = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {register, handleSubmit,reset, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        dispatch(logIn(data));
        history.push('./main');
        reset();
    }
    return (
        <Container sx={{width: '400px'}}>
            <Typography component="h2" variant="h5">Log in user</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                placeholder = "Enter your password"
                required
                autoComplete="on"
                error={!!errors.password}
                helperText={errors?.password?.message}
            />
            <PrimaryButton>Log in</PrimaryButton>
            </Form>
            <Typography sx={{textAlign:"center"}}> or </Typography>
            <PrimaryButton onClick={() => history.push(`/registration`)}>Sign Up</PrimaryButton>
        </Container>
    )
    
};