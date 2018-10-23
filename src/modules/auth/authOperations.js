import * as actions from './authActions';
import Api from '../../api/Api';

export const init = () => async (dispatch) => {
  dispatch(actions.getUserStart());
  const token = window.localStorage.getItem('token');

  try {
    Api.setToken(token);
    // debugger;
    const user = await Api.getUser();
    debugger;
    dispatch(actions.getUserSuccess(user));
  } catch (error) {
    dispatch(actions.getUserError({ message: error.message }));
    window.localStorage.removeItem('token');
    debugger;
  }
};

export const loginUser = (
  emailForm,
  passwordForm,
) => async (dispatch) => {
  dispatch(actions.loginUserStart());

  try {
    const userInfo = await Api.login(emailForm, passwordForm);
    dispatch(actions.loginUserSuccess(userInfo));
    window.localStorage.setItem('token', userInfo.token);
  } catch (error) {
    dispatch(actions.loginUserError({ message: error.message }));
  }
};

export const registerUser = userInfo => async (dispatch) => {
  dispatch(actions.registerUserStart());
  const createBody = user => ({
    email: user.emailForm,
    password: user.passwordForm1,
    firstName: user.name,
    lastName: user.surname,
  });

  const body = createBody(userInfo);

  try {
    const request = await Api.registerUser(body);
    dispatch(actions.registerUserSuccess(request));
  } catch (error) {
    dispatch(actions.registerUserError({ message: error.message }));
  }
};

export const rememberUser = userInfo => async (dispatch) => {
  dispatch(actions.rememberUserStart());
  const createBody = user => ({
    email: user.emailForm,
  });

  const body = createBody(userInfo);

  try {
    const request = await Api.rememberUser(body);
    dispatch(actions.rememberUserSuccess(request));
  } catch (error) {
    dispatch(actions.rememberUserError({ message: error.message }));
  }
};

export const removeConnectedUser = () => async (dispatch) => {
  dispatch(actions.removeConnectedUserStart());

  try {
    Api.setToken(null);
    dispatch(actions.removeConnectedUserSuccess());
  } catch (error) {
    dispatch(actions.removeConnectedUserError({ message: error.message }));
  }
};
