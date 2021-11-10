import { userActions } from "../Actions";

export const initialState = {
    currentUser:{},
    isLoggedIn: false,
};

export function userReducer (state=initialState, action) {
    switch(action.type) {
        case userActions.FETCH_USER_SUCCESS:
            return {
                ...state,
                currentUser: {...action.payload.user},
                isLoggedIn: !state.isLoggedIn,
            };
        default:
            return state;
    }
}