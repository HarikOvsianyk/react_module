import * as api from '../Apis';
import { fetchUserSuccess } from '../Store/Actions/user';

export const genereteSessionAndGetUser = (requestToken) => {
    return async (dispatch) => {
      const { session_id } = await api.generateSessionId(requestToken);
      localStorage.setItem('session_id', session_id);
  
      const user = await api.getAccount(session_id);
      dispatch(fetchUserSuccess(user));
    };
  };