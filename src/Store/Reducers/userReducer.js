import {LOG_IN} from '../Actions';

export const initialState = {
    currentUser:{},
    isLogged: false,
};

export function userReducer (state=initialState, action) {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                currentUser: {...action.payload},
                isLogged: true,
            };
        default:
            return state;
    }
}