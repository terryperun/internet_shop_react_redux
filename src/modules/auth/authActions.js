import { createAction } from 'redux-actions';
import * as types from './authTypes';

export const loginUserStart = createAction(types.LOGIN_USER_START);
export const loginUserSuccess = createAction(types.LOGIN_USER_SUCCESS);
export const loginUserError = createAction(types.LOGIN_USER_ERROR);

export const getUserStart = createAction(types.GET_USER_START);
export const getUserSuccess = createAction(types.GET_USER_SUCCESS);
export const getUserError = createAction(types.GET_USER_ERROR);

export const registerUserStart = createAction(types.REGISTER_USER_START);
export const registerUserSuccess = createAction(types.REGISTER_USER_SUCCESS);
export const registerUserError = createAction(types.REGISTER_USER_ERROR);

export const rememberUserStart = createAction(types.REMEMBER_USER_START);
export const rememberUserSuccess = createAction(types.REMEMBER_USER_SUCCESS);
export const rememberUserError = createAction(types.REMEMBER_USER_ERROR);
