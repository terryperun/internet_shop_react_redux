import { combineReducers } from 'redux';
import products from './products/productsReducer';
import entities from './entities/entitiesReducer';
import cart from './cart/cartReducer';

export default combineReducers({
  products,
  entities,
  cart,
});

console.log(combineReducers({
  products,
  entities,
  cart,
}));
