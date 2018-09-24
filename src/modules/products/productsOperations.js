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

export const updateProduct = (id, product) => async (dispatch) => {
  dispatch(actions.updateProductStart());

  const createBody = product => ({
    title: product.title || '',
    description: product.description || '',
    price: product.price || '',
    image: '',
  });

  const body = createBody(product);

  try {
    const products = await Api.updateProduct(id, body);
    dispatch(actions.updateProductSuccess({ id, product: products[0] }));
  } catch (error) {
    dispatch(actions.updateProductError({ message: error.message }));
  }
};

export const createProduct = product => async (dispatch) => {
  dispatch(actions.createProductStart());

  const createBody = product => ({
    title: product.title || '',
    description: product.description || '',
    price: product.price || '',
    image: '',
  });
  const body = createBody(product);

  try {
    const newProduct = await Api.createProduct(body);
    dispatch(actions.createProductSuccess(newProduct[0]));
  } catch (error) {
    dispatch(actions.createProductError({ message: error.message }));
  }
};
