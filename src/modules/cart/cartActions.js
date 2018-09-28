import { createAction } from 'redux-actions';
import * as types from './cartTypes';

export const addToCartStart = createAction(types.ADD_TO_CART_START);
export const removeFromCart = createAction(types.REMOVE_FROM_CART);
// export const showCart = createAction(types.SHOW_CART);
