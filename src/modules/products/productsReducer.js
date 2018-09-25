import * as types from './productTypes';

const initialState = {
  items: [],
  entities: {
    // [id]: { ...product }
  },
  isLoading: false,
  error: null,
};

const normalize = arr => arr.reduce(
  (acc, item) => {
    acc.ids.push(item.id);
    acc.entities[item.id] = item;
    return acc;
  },
  { ids: [], entities: {} }
);

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS_START:
      return { ...state, isLoading: true, error: null };

    case types.FETCH_PRODUCTS_SUCCESS: {
      const products = action.payload;

      const { ids, entities } = normalize(products);

      return {
        ...state,
        isLoading: false,
        items: ids,
        entities: Object.assign({}, state.entities, entities),
      };
    }

    case types.FETCH_PRODUCTS_ERROR:
      return { ...state, error: action.payload };

    case types.DELETE_PRODUCT_START:
      return { ...state, isRemoving: false };

    case types.DELETE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isRemoving: true,
        items: state.items.filter(id => id !== action.payload),
      };
    }

    case types.DELETE_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    case types.UPDATE_PRODUCT_START:
      return { ...state, isUpdate: false };

    case types.UPDATE_PRODUCT_SUCCESS: {
      const { id, product } = action.payload;

      return {
        ...state,
        isUpdate: true,
        entities: {
          ...state.entities,
          [id]: product,
        },
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
