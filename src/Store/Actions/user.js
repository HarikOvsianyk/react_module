export const LOG_IN = '[user] - log in';

export const logIn = (user) => ({
    type: LOG_IN,
    payload: {user},
});