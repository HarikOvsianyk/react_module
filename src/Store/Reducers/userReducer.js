import {FETCH_USER_SUCCESS} from '../Actions/user';

export const initialState = {
    currentUser:{},
    isLogged: false,
};

export function userReducer (state=initialState, action) {
    switch(action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                currentUser: {...action.payload},
                isLogged: true,
            };
        default:
            return state;
    }
}