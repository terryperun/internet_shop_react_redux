import { createAction } from 'redux-actions';
import * as types from './cartTypes';

export const addToCart = createAction(types.ADD_TO_CART);
export const removeFromCart = createAction(types.REMOVE_FROM_CART);
