import { createStore,applyMiddleware  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootRedcuer } from "../Store/rootReducer";
import { fetchUserSuccess,userActions} from "./Actions";
import * as api from '../Apis';
import thunk from "redux-thunk";

const userMiddleware = (store) => (next) => async (action) => {
  const { isLoggedIn } = store.getState().user;
  console.log(store.getState().user);
  if (
    action.type !== userActions.FETCH_USER_SUCCESS &&
    !isLoggedIn &&
    localStorage.getItem('session_id')
  ) {
    try {
      const sessionId = localStorage.getItem('session_id');
      const user = await api.getAccount(sessionId);
      store.dispatch(fetchUserSuccess(user));
    } catch {
      localStorage.removeItem('session_id');
    }
  }
  next(action);
};

const middlewares = [thunk, userMiddleware];

export const store = createStore(
    rootRedcuer,
    composeWithDevTools(applyMiddleware(...middlewares)));

