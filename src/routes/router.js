import React from 'react';
import { Router, Route } from 'react-router';

import '../App.css';
import About from './About/AboutView';
import Admin from './Admin/AdminView';
import Cart from './Cart/CartView';
import Contact from './Contact/ContactView';
// import Error from './Error/ErrorView';
import Product from './Product/ProductView';
import EditProduct from './EditProduct/EditProductView';
import PrivacyPolicy from './Privacypolicy/PrivacypolicyView';
import TermsAndConditions from './Termsandconditions/TermsandconditionsView';
import Checkout from './Checkout/CheckoutView';
import Store from './Store/StoreView';
import { products } from '../mocks/Product';

const routes = (
  <Router>
    <Route path="/admin" component={props => <Admin {...props} />} />
    <Route path="/" component={props => <Store {...props} />} />
    <Route path="/cart" component={Cart} />
    <Route path="/cart/checkout" component={Checkout} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route
      path="/termsandconditions"
      component={TermsAndConditions}
    />
    <Route path="/privacypolicy" component={PrivacyPolicy} />
    {/* <Route path="*" component={Error} /> */}
    <Route
      path="/admin/product/:id"
      component={props => <EditProduct {...props} />}
    />
    <Route
      path="/product/:id"
      component={props => <Product {...props} />}
    />
  </Router>
);

export default routes;
