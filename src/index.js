import { Router, Route, hashHistory } from 'react-router';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import About from './routes/About/AboutView';
import Admin from './routes/Admin/AdminView';
import Cart from './routes/Cart/CartView';
import Contact from './routes/Contact/ContactView';
// import Error from './routes/Error/ErrorView';
import Product from './routes/Product/ProductView';
import EditProduct from './routes/EditProduct/EditProductView';
import PrivacyPolicy from './routes/Privacypolicy/PrivacypolicyView';
import TermsAndConditions from './routes/Termsandconditions/TermsandconditionsView';
import Checkout from './routes/Checkout/CheckoutView';
import Store from './routes/Store/StoreView'


ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Store} />
      <Route path="/cart" component={Cart} />
      <Route path="/cart/checkout" component={Checkout} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/termsandconditions" component={TermsAndConditions} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
      <Route component={Error} />
      <Route path="/admin/product/:id" component={EditProduct} />
      <Route path="/product/:id" component={Product} />
    </Router>,
  document.getElementById('root')
);
registerServiceWorker();
