import * as types from './productTypes';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_START:
      return { ...state, isLoading: true, error: null };

    case types.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, items: action.payload };

    case types.FETCH_PRODUCTS_ERROR:
      return { ...state, error: action.payload };

    case types.DELETE_PRODUCT_START:
      return { ...state, isRemoving: false };

    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isRemoving: true,
        items: state.items.filter(i => i.id !== action.payload),
      };

    case types.DELETE_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

export default reducer;
