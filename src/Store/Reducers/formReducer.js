import {GET_DATA} from '../Actions/form';

export const initialState = {
    data: {},
};

export const formReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}