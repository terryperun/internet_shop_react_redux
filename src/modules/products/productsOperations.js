import * as actions from './productsActions';
import Api from '../../api/Api';

export const fetchProducts = () => async (dispatch) => {
  dispatch(actions.fetchProductsStart());

  try {
    const products = await Api.getProducts();
    const action = actions.fetchProductsSuccess(products);
    dispatch(action);
  } catch (error) {
    dispatch(actions.fetchProductsError({ message: error.message }));
  }
};
