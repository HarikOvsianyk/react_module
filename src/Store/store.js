import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootRedcuer } from "./rootReducer";
import { fetchUserSuccess,userActions} from "./Actions/user";
import * as api from '../Apis';
import thunk from "redux-thunk";

const userMiddleware = (store) => (next) => async (action) => {
  if (
    action.type !== userActions.FETCH_USER_SUCCESS &&
    localStorage.getItem('session_id')
  ) {const sessionId = localStorage.getItem('session_id');
  const user = await api.getAccount(sessionId);
  store.dispatch(fetchUserSuccess(user));
  }
  next(action);
};

const middlewares = [thunk, userMiddleware];

export const store = createStore(
    rootRedcuer,
    composeWithDevTools(applyMiddleware(...middlewares)));

