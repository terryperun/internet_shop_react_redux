import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, hashHistory } from 'react-router';
import About from './routes/About/AboutView';
import Admin from './routes/Admin/AdminView';
import Cart from './routes/Cart/CartView';
import Contact from './routes/Contact/ContactView';
import Error from './routes/Error/ErrorView';
import Unit from './routes/Unit/UnitView';
import Privacypolicy from './routes/Privacypolicy/PrivacypolicyView';
import Termsandconditions from './routes/Termsandconditions/TermsandconditionsView';
import Checkout from './routes/Checkout/CheckoutView';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/admin" component={Admin} />
    <Route path="/admin/:id" component={Unit} />
    <Route path="/" component={App} />
    <Route path="/:id" component={Unit} />
    <Route path="/cart" component={Cart} />
    <Route path="/cart/checkout" component={Checkout} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/termsandconditions" component={Termsandconditions} />
    <Route path="/privacypolicy" component={Privacypolicy} />
    <Route component={Error} />
  </Router>,
   document.getElementById('root'));
registerServiceWorker();
