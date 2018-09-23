import { createAction } from 'redux-actions';
import * as types from './productTypes';

export const fetchProductsStart = payload => ({
  type: types.FETCH_PRODUCTS_START,
  payload,
});
export const fetchProductsSuccess = createAction(types.FETCH_PRODUCTS_SUCCESS);
export const fetchProductsError = createAction(types.FETCH_PRODUCTS_ERROR);

export const deleteProductStart = createAction(types.DELETE_PRODUCT_START);
export const deleteProductSuccess = createAction(types.DELETE_PRODUCT_SUCCESS);
export const deleteProductError = createAction(types.DELETE_PRODUCT_ERROR);
