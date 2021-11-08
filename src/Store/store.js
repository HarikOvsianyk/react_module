import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootRedcuer} from '../Store/rootReducer';

export const store = createStore(rootRedcuer,composeWithDevTools());