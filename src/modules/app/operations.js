import Api from '../../api/Api';

export const initApi = token => () => {
  Api.setToken(token);
};

export const init = () => async (dispatch) => {
  const token = await localStorage.getItem('token');
  console.log('111111111111111111111111', token);
  if (token) {
    dispatch(initApi(token));
    // console.log('111111111111111111111111');
    // const response = await
  }
};
