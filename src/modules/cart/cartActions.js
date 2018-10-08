import { createAction } from 'redux-actions';
import * as types from './cartTypes';

export const addToCart = createAction(types.ADD_TO_CART);
export const removeFromCart = createAction(types.REMOVE_FROM_CART);

// export const getProductsByIdsStart = createAction(types.GET_PRODUCTS_BY_IDS);
// export const getProductsByIdsSuccess = createAction(types.GET_PRODUCTS_BY_IDS);
// export const getProductsByIdsEr = createAction(types.GET_PRODUCTS_BY_IDS);
