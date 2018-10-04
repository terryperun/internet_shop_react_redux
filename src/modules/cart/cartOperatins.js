import * as actions from './cartActions';
// import normalize from '../../utils/normalize';
// import Api from '../../api/Api';
export default {
  ...actions,
};

// export const fetchProductsCart = ids => async (dispatch) => {
//   dispatch(actions.fetchProductsCartStart());

//   try {
//     const products = await Api.getProductsByIds(ids);
//     const { ids, entities } = normalize(products);
//     dispatch(actions.fetchProductsCartSuccess({
//       ids,
//       entities: { products: entities },
//     }));
//   } catch (error) {
//     dispatch(actions.fetchProductsCartError({ message: error.message }));
//   }
// };
