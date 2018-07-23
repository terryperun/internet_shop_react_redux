import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, hashHistory } from 'react-router';
import About from './components/About';
import Admin from './components/Admin';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Error from './components/Error';
import Unit from './components/Unit';
import Privacypolicy from './components/Privacypolicy';
import Termsandconditions from './components/Termsandconditions';
import Checkout from './components/Checkout';


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
