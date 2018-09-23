import { createAction } from 'redux-actions';
import * as types from './productTypes';

export const fetchProductsStart = payload => ({
  type: types.FETCH_PRODUCTS_START,
  payload,
});
export const fetchProductsSuccess = createAction(types.FETCH_PRODUCTS_SUCCESS);
export const fetchProductsError = createAction(types.FETCH_PRODUCTS_ERROR);
