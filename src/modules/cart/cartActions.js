import { createAction } from 'redux-actions';
import * as types from './cartTypes';

export const addToCart = createAction(types.ADD_TO_CART);
export const removeFromCart = createAction(types.REMOVE_FROM_CART);

// export const fetchProductsCartStart = createAction(types.FETCH_PRODUCTS_CART_START);
// export const fetchProductsCartSuccess = createAction(types.FETCH_PRODUCTS_CART_SUCCSESS);
// export const fetchProductsCartError = createAction(types.FETCH_PRODUCTS_CART_ERROR);
