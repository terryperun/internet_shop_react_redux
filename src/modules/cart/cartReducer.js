import * as types from './cartTypes';
// import * as productsTypes from '../products/productTypes';

const initialState = {
  items: [],
  totalPrice: 0,
  // products: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      return {
        ...state,
        items: [...state.items, action.payload.id],
        totalPrice: state.totalPrice + action.payload.price,
      };
    }
    case types.REMOVE_FROM_CART: {
      const { id, price } = action.payload;
      console.log('-----------4-----------', id);
      return {
        ...state,
        items: state.items.filter(i => i !== id),
        totalPrice: state.totalPrice - price,
      };
    }

    default:
      return state;
  }
}
