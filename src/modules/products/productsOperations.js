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

export const deleteProduct = id => async (dispatch) => {
  dispatch(actions.deleteProductStart());

  try {
    await Api.removeProduct(id);
    dispatch(actions.deleteProductSuccess(id));
  } catch (error) {
    dispatch(actions.deleteProductError({ message: error.message }));
  }
};
