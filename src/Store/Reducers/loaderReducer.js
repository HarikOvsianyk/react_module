import {ON_LOADER, OFF_LOADER} from '../Actions';

export const initialState = {
    isLoading:false,
};

export function loaderReducer (state=initialState, action) {
    switch(action.type) {
        case ON_LOADER:
            return {
                ...state,
                isLoading: true,
            };
        case OFF_LOADER:
            return {
                ...state,
                isLoading: false,
                };
        default:
            return state;
    }
}
