import { createAction } from 'redux-actions';
import * as types from './productTypes';

export const fetchProductsStart = payload => ({
  type: types.FETCH_PRODUCTS_START,
  payload,
});
export const fetchProductsSuccess = createAction(types.FETCH_PRODUCTS_SUCCESS);
export const fetchProductsError = createAction(types.FETCH_PRODUCTS_ERROR);

export const fetchProductStart = createAction(types.FETCH_PRODUCT_START);
export const fetchProductSuccess = createAction(types.FETCH_PRODUCT_SUCCESS);
export const fetchProductError = createAction(types.FETCH_PRODUCT_ERROR);

export const deleteProductStart = createAction(types.DELETE_PRODUCT_START);
export const deleteProductSuccess = createAction(types.DELETE_PRODUCT_SUCCESS);
export const deleteProductError = createAction(types.DELETE_PRODUCT_ERROR);

export const updateProductStart = createAction(types.UPDATE_PRODUCT_START);
export const updateProductSuccess = createAction(types.UPDATE_PRODUCT_SUCCESS);
export const updateProductError = createAction(types.UPDATE_PRODUCT_ERROR);

export const createProductStart = createAction(types.CREATE_PRODUCT_START);
export const createProductSuccess = createAction(types.CREATE_PRODUCT_SUCCESS);
export const createProductError = createAction(types.CREATE_PRODUCT_ERROR);

// export const createNewItemBollStart = createAction(types.CREATE_NEW_ITEM_BOOL_START);
// export const createNewItemBollSuccess = createAction(types.CREATE_NEW_ITEM_BOOL_SUCCESS);
// export const createNewItemBollError = createAction(types.CREATE_NEW_ITEM_BOOL_ERROR);
