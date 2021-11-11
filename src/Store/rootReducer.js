import {
    combineReducers
} from 'redux';
import {
    themeReducer,
    userReducer,
    moviesReducer,
    loaderReducer
} from './Reducers';


export const rootRedcuer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    movies: moviesReducer,
    loader: loaderReducer,
});