import {CHANGE_THEME} from '../Actions';

export const initialState = {
    isLightMode:true,
};

export function themeReducer (state=initialState, action) {
    switch(action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                isLightMode: !state.isLightMode,
            };
        default:
            return state;
    }
}