import {combineReducers} from 'redux';
import { formReducer } from './Reducers/formReducer';

export const rootRedcuer = combineReducers({
    data: formReducer,
});