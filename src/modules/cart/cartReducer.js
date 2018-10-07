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
        // products: [...state.products, action.payload],
      };
    }
    case types.REMOVE_FROM_CART: {
      const { id, price } = action.payload;
      console.log('-----------4-----------', id);
      return {
        ...state,
        items: state.items.filter(i => i !== id),
        // items: state.items.filter(id => id !== action.payload),
        totalPrice: state.totalPrice - price,
        // products: [...state.products, action.payload],
      };
    }

    // case types.FETCH_PRODUCTS_CART_START:
    //   return { ...state, isLoading: true, error: null };

    // case types.FETCH_PRODUCTS_CART_SUCCESS: {
    //   const { ids } = action.payload;

    //   return {
    //     ...state,
    //     isLoading: false,
    //     items: ids,
    //   };
    // }

    // case types.FETCH_PRODUCTS_CART_ERROR:
    //   return { ...state, error: action.payload };

    // case types.REMOVE_FROM_CART:
    // return {};

    default:
      return state;
  }
}
