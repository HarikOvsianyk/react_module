import * as yup from "yup";

export const schema = yup.object().shape({
    firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is required field"),
    lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is required field"),
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
    .required('Password is required field')
    .oneOf([yup.ref('password')], 'Passwords must match'),
    username: yup
    .string()
    .matches(/^[a-z0-9_.]{3,16}$/, 'Do not use big letters, numbers in beginning, whitespece or symbols except "." or "_" ')
    .required()
});