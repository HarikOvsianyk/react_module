import {GET_DATA} from '../Actions/form';

export const initialState = {
    data: {},
};

export function formReducer (state=initialState, action) {
    switch(action.type) {
        case GET_DATA:
            console.log(action.payload);
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}