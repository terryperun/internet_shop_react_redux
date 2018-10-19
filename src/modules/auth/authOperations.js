import * as actions from './authActions';
import Api from '../../api/Api';

export const init = () => async (dispatch) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    Api.setToken(token);
    const user = await Api.getUser();
    dispatch(actions.getUserSuccess(user));
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
