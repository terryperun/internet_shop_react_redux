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

    case types.FETCH_PRODUCTS_SUCCESS: {
      const { ids } = action.payload;

      return {
        ...state,
        isLoading: false,
        items: ids,
      };
    }

    case types.FETCH_PRODUCTS_ERROR:
      return { ...state, error: action.payload };

    case types.FETCH_PRODUCT_START:
      return { ...state, isLoading: true, error: null };

    case types.FETCH_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.FETCH_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    case types.DELETE_PRODUCT_START:
      return { ...state, isLoading: true };

    case types.DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        items: state.items.filter(id => id !== action.payload),
      };
    }

    case types.DELETE_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    case types.UPDATE_PRODUCT_START:
      return { ...state, isLoading: true };

    case types.UPDATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.UPDATE_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    case types.CREATE_PRODUCT_START:
      return { ...state, isLoading: true, error: null };

    case types.CREATE_PRODUCT_SUCCESS: {
      const { id } = action.payload;
      return {
        ...state,
        isLoading: false,
        items: [id].concat(state.items),
        entities: {
          ...state.entities,
          [id]: action.payload,
        },
      };
    }

    case types.CREATE_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

export default reducer;
