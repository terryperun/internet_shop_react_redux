import Api from '../../api/Api';
import * as actions from './actions';

// export const initApi = token => () => {
//   Api.login()
// Api.setToken(token);
// };

export const init = () => async (dispatch) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    Api.setToen(token);
    dispatch(actions.getUser(token));
    // dispatch(initApi(token));
    // dispatch(action.fetchUser)
  }
};

// export const login = () => async (dispatch) => {

// }
