export const userActions = {
    FETCH_USER_SUCCESS: '[user] - fetch user success',
}

export const fetchUserSuccess = (user) => ({
    type: userActions.FETCH_USER_SUCCESS,
    payload: {
        user
    },
});