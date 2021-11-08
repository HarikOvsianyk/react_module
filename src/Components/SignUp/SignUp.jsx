import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {Form} from '../UI/Form';
import {Input} from '../UI/Input';
import { DateInput } from '../UI/DateInput';
import {SexSelect} from '../UI/SexSelect';
import {PrimaryButton} from '../UI/PrimaryButton';
import {getData} from '../../Store/Actions/form';
import {useDispatch} from 'react-redux';
import {schema} from '../../Utils/validationSchema';
import {useHistory} from 'react-router-dom';


export const SignUp = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {register, handleSubmit,reset, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit  = (data) => {
            reset();
            dispatch(getData(data));
    };

    return (
        <Box>
            <PrimaryButton onClick={() => history.push(`/`)} sx={{width: 200, left:0}}>Back to Sign Up</PrimaryButton>
            <Container sx={{width: '400px'}}>
            <Typography component="h2" variant="h5">Registration user</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                {...register('firstName')}
                id="firstName"
                type="text"
                label="First Name"
                placeholder = "Enter first name"
                required
                error={!!errors.firstName}
                helperText={errors?.firstName?.message}
            />
            <Input
                {...register('lastName')}
                id="lastName"
                type="text"
                label="Last Name"
                placeholder = "Enter last mame"
                required
                error={!!errors.lastName}
                helperText={errors?.lastName?.message}
                sx={{mb:3}}
            />
            <DateInput />
            <SexSelect/>
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
            <Input
                {...register('password2')}
                id="password2"
                type="password"
                label="Password"
                placeholder = "Confirm your password."
                required
                autoComplete="on"
                error={!!errors.password2}
                helperText={errors?.password2?.message}
            />
            <Input
                {...register('username')}
                id="username"
                type="text"
                label="Username"
                placeholder = "Enter username"
                required
                error={!!errors.username}
                helperText={errors?.username?.message}
            />
            <PrimaryButton>Registration</PrimaryButton>
            </Form>
        </Container>
        </Box>
    )
    
};