import { combineReducers } from 'redux';
import products from './products/productsReducer';
import entities from './entities/entitiesReducer';
import cart from './cart/cartReducer';
// import app from './app/operations';

export default combineReducers({
  products,
  entities,
  cart,
  // app,
});

// console.log(combineReducers({
//   products,
//   entities,
//   cart,
// }));
