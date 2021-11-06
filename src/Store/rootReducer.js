import {combineReducers} from 'redux';
import { formReducer, themeReducer } from './Reducers';


export const rootRedcuer = combineReducers({
    data: formReducer,
    theme: themeReducer,
});