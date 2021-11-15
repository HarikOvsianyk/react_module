import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Form } from "../UI/Form";
import { Input } from "../UI/Input";
import { DateInput } from "../UI/DateInput";
import { SexSelect } from "../UI/SexSelect";
import { PrimaryButton } from "../UI/PrimaryButton";
import { schema } from "../../Utils/validationSchema";

export const SignUp = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const notify = () =>
    toast.success("It was mockup registration", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const onSubmit = () => {
    notify();
    reset();
  };

  return (
    <Box>
      <PrimaryButton
        onClick={() => history.push(`/`)}
        sx={{ width: 200, left: 0 }}
      >
        Back to Log In
      </PrimaryButton>
      <Container sx={{ width: "400px" }}>
        <Typography component="h2" variant="h5">
          Registration user
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("firstName")}
            id="firstName"
            type="text"
            label="First Name"
            placeholder="Enter first name"
            required
            error={!!errors.firstName}
            helperText={errors?.firstName?.message}
          />
          <Input
            {...register("lastName")}
            id="lastName"
            type="text"
            label="Last Name"
            placeholder="Enter last mame"
            required
            error={!!errors.lastName}
            helperText={errors?.lastName?.message}
            sx={{ mb: 3 }}
          />
          <DateInput />
          <SexSelect />
          <Input
            {...register("email")}
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            required
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
          <Input
            {...register("password")}
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            required
            autoComplete="on"
            error={!!errors.password}
            helperText={errors?.password?.message}
          />
          <Input
            {...register("password2")}
            id="password2"
            type="password"
            label="Password"
            placeholder="Confirm your password."
            required
            autoComplete="on"
            error={!!errors.password2}
            helperText={errors?.password2?.message}
          />
          <Input
            {...register("username")}
            id="username"
            type="text"
            label="Username"
            placeholder="Enter username"
            required
            error={!!errors.username}
            helperText={errors?.username?.message}
          />
          <PrimaryButton>Registration</PrimaryButton>
          <ToastContainer />
        </Form>
      </Container>
    </Box>
  );
};
