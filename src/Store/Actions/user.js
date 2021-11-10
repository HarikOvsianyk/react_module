export const FETCH_USER_SUCCESS = '[user] - fetch user success';

export const fetchUserSuccess = (user) => ({
    type: FETCH_USER_SUCCESS,
    payload: {user},
});
