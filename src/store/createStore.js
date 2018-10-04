import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../modules';

// function saveToLocalStorage(state) {
//   try {
//     const enhancerState = JSON.stringify(state);
//     localStorage.setItem('state', enhancerState);
//   } catch (e) {
//     console.log(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const enhancerState = JSON.getItem('state');
//     if (enhancerState === null) return undefined;
//     return JSON.parse(enhancerState);
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// }

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistedState = loadFromLocalStorage();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  // rootReducer,
  persistedReducer,
  // persistedState,

  {},
  composeEnhancers(applyMiddleware(reduxThunk)),
);

const persistor = persistStore(store);
// store.subscribe(() => saveToLocalStorage(store.getSate()));

// export default store;
export { store, persistor };
