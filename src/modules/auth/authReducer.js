import * as types from './authTypes';

const initialState = {
  isLoading: true,
  isLoginedIn: false,
  isRemember: false,
  viewer: null,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_START:
      return { ...state, isLoginedIn: true, error: null };

    case types.GET_USER_SUCCESS: {
      const { user } = action.payload;
      return {
        ...state,
        isLoginedIn: true,
        viewer: user,
      };
    }

    case types.GET_USER_ERROR:
      return { ...state, error: action.payload };

    case types.LOGIN_USER_START:
      return { ...state, isLoginedIn: true, error: null };

    case types.LOGIN_USER_SUCCESS: {
      const { user } = action.payload;

      return {
        ...state,
        isLoading: false,
        isLoginedIn: true,
        viewer: user,
      };
    }

    case types.LOGIN_USER_ERROR:
      return { ...state, error: action.payload };

    case types.REGISTER_USER_START:
      return { ...state, isLoading: true, error: null };

    case types.REGISTER_USER_SUCCESS: {
      const { success } = action.payload;

      return {
        ...state,
        isLoading: false,
        isRegister: success,
      };
    }

    case types.REGISTER_USER_ERROR:
      return { ...state, error: action.payload };

    case types.REMEMBER_USER_START:
      return { ...state, isLoading: true, error: null };

    case types.REMEMBER_USER_SUCCESS: {
      const { success } = action.payload;

      return {
        ...state,
        isLoading: false,
        isRemember: success,
      };
    }

    case types.REMEMBER_USER_ERROR:
      return { ...state, error: action.payload };

    case types.REMOVE_CONNECTED_USER_START:
      return { ...state, isLoading: true, error: null };

    case types.REMOVE_CONNECTED_USER_SUCCESS:
      return {
        ...state,
        viewer: null,
      };

    case types.REMOVE_CONNECTED_USER_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
