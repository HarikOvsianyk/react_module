import { createStore,applyMiddleware  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootRedcuer } from "../Store/rootReducer";
import { FETCH_USER_SUCCESS } from "./Actions";
import { fetchUserSuccess } from "./Actions";
import * as api from '../Apis';
import thunk from "redux-thunk";

const userMiddleware = (store) => (next) => async (action) => {
    if (action.type !== FETCH_USER_SUCCESS && !store.getState().user.isLoggedIn) {
      let session_id = localStorage.getItem('session_id');
      const user = await api.getAccount(session_id);
      store.dispatch(fetchUserSuccess(user));
    }
    return next(action);
  };

  const middlewares = [thunk, userMiddleware];

export const store = createStore(
    rootRedcuer,
    composeWithDevTools(applyMiddleware(...middlewares)));
