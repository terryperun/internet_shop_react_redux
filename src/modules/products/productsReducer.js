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

    case types.DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isRemoving: true,
        items: state.items.filter(i => i.id !== action.payload),
      };
    }

    case types.DELETE_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    case types.UPDATE_PRODUCT_START:
      return { ...state, isUpdate: false };

    case types.UPDATE_PRODUCT_SUCCESS: {
      const indexItem = state.items.findIndex(i => i.id === action.payload.id);
      const items = [...state.items];
      items[indexItem] = action.payload.product;

      return {
        ...state,
        isUpdate: true,
        items,
      };
    }

    case types.UPDATE_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    case types.CREATE_PRODUCT_START:
      return { ...state, isLoading: true, error: null };

    case types.CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, action.payload],
      };
    }

    case types.CREATE_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

export default reducer;
