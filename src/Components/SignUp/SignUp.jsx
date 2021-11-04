import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Input} from '../UI/Input';
import {PrimaryButton} from '../UI/PrimaryButton';


export const SignUp = () => {
    const schema = yup.object().shape({
        firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is required field"),
        lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is required field"),
        birthday: yup
        .number()
        .required()
        .positive()
        .integer(),
        sex: yup
        .string(),
        email: yup
        .string()
        .email("Email should have correct format")
        .required("Email is a required field"),
        password: yup
        .string()
        .min(3)
        .required('Password is required field'),
        password2: yup
        .string()
        .min(3)
        .required('Password is required field'),
        username: yup
        .string()
        .required(),
    });

    const {register, handleSubmit,reset, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const handleChange = (newValue) => {
        setValue(newValue);
      };

    const onSubmit = () => {
        reset();
    }

    const [value, setValue] = React.useState(new Date());
    return (
        <Container sx={{width: '400px'}}>
            <Typography component="h2" variant="h5">Registration user</Typography>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
            />
            <Input
                {...register('birthday')}
                id="birthday"
                type="date"
                label="Birthday"
                placeholder = "Enter your birthday"
                required
                error={!!errors.birthday}
                helperText={errors?.birthday?.message}
            />
            {/* <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
            <Input
                {...register('sex')}
                id="sex"
                type="text"
                label="Sex"
                placeholder = "Enter your sex"
                required
                error={!!errors.email}
                helperText={errors?.email?.message}
            />
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
            </form>
        </Container>
    )
    
};