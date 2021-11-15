import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../UI/Form";
import { Input } from "../UI/Input";
import { PrimaryButton } from "../UI/PrimaryButton";
import { useFetching } from "../../Hooks/useFetching";
import * as api from "../../Apis";
import { genereteSessionAndGetUser } from "../../Thunks/auth";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  password: yup.string().min(6).required("Password is required field"),
});

export const LogIn = () => {
  const history = useHistory();
  const search = useLocation().search;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const [fetchToken] = useFetching(async () => {
    const token = await api.generateToken();

    const redirectUrl = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${process.env.REACT_APP_REDIRECT_LINK}`;
    window.open(redirectUrl, "_blank", "noopener noreferrer");
  });
  const onSubmit = async (data) => {
    fetchToken();
  };

  useEffect(() => {
    const requestToken = new URLSearchParams(search).get("request_token");
    if (requestToken) {
      dispatch(genereteSessionAndGetUser(requestToken));
    }
  }, [search, dispatch, history]);

  useEffect(() => {
    if (user.isLoggedIn) {
      history.push("/main");
    }
  }, [user, history, dispatch]);

  return (
    <Container sx={{ width: "400px" }}>
      <Typography component="h2" variant="h5">
        Log in user
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <PrimaryButton>Log in</PrimaryButton>
      </Form>
      <Typography sx={{ textAlign: "center" }}> or </Typography>
      <PrimaryButton onClick={() => history.push(`/registration`)}>
        Sign Up
      </PrimaryButton>
    </Container>
  );
};
