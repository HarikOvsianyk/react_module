import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootRedcuer } from "./rootReducer";
import { fetchUserSuccess, userActions } from "./Actions/user";
import * as api from "../Apis";
import thunk from "redux-thunk";

const userMiddleware = (store) => (next) => async (action) => {
  if (
    action.type !== userActions.FETCH_USER_SUCCESS &&
    !store.getState().user.isLoggedIn
  ) {
    let sessionId = localStorage.getItem("session_id");
    const user = await api.getAccount(sessionId);
    store.dispatch(fetchUserSuccess(user));
  }
  return next(action);
};

const middlewares = [thunk, userMiddleware];

export const store = createStore(
  rootRedcuer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
