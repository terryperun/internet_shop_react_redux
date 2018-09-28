import * as types from './cartTypes';
import * as productsTypes from '../products/productTypes';

const initialState = {
  items: [],
  totalPrice: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const { id } = action.payload;
      return {
        ...state,
        items: [...state.items, id],
      };
    }

    case types.REMOVE_FROM_CART:
      return {};

    // case productTypes.DELETE_PRODUCT_SUCCESS:
    //   return {};

    default:
      return state;
  }
}
