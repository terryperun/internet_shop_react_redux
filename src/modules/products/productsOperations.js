import * as actions from './productsActions';
import Api from '../../api/Api';
import normalize from '../../utils/normalize';

export const fetchProducts = () => async (dispatch) => {
  dispatch(actions.fetchProductsStart());

  try {
    const products = await Api.getProducts();
    const { ids, entities } = normalize(products);
    dispatch(actions.fetchProductsSuccess({
      ids,
      entities: { products: entities },
    }));
  } catch (error) {
    dispatch(actions.fetchProductsError({ message: error.message }));
  }
};

export const fetchProduct = id => async (dispatch) => {
  dispatch(actions.fetchProductStart());

  try {
    const [product] = await Api.getProduct(id);
    const action = actions.fetchProductSuccess({
      entities: {
        products: {
          [product.id]: product,
        },
      },
    });
    dispatch(action);
  } catch (error) {
    dispatch(actions.fetchProductError({ message: error.message }));
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
    const [product] = await Api.updateProduct(id, body);
    dispatch(actions.updateProductSuccess({
      entities: {
        products: {
          [product.id]: product,
        },
      },
    }));
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
