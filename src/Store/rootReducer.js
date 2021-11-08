import {combineReducers} from 'redux';
import { formReducer, themeReducer, userReducer } from './Reducers';


export const rootRedcuer = combineReducers({
    data: formReducer,
    theme: themeReducer,
    user: userReducer,
});