import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

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
import Register from './Register/RegisterView';
import Login from './Login/LoginView';
import Remember from './Remember/RememberView';
import PrivatRoute from './PrivatRoute/PrivatRaute';
import ModalCart from '../components/ModalCart/ModalCart';

class Router extends Component {
  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    // debugger;
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <PrivatRoute
            path="/admin"
            exact
            component={props => <Admin {...props} />}
          />
          <Route
            exact
            path="/"
            component={props => <Store {...props} />}
          />
          <Route
            exact
            path="/cart"
            component={props => <Cart {...props} />}
          />
          <Route exact path="/cart/checkout" component={Checkout} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/termsandconditions"
            component={TermsAndConditions}
          />
          <Route
            exact
            path="/privacypolicy"
            component={PrivacyPolicy}
          />
          {/* <Route path="*" component={Error} /> */}
          <Route
            exact
            path="/admin/product/:id"
            component={props => <EditProduct {...props} />}
          />
          <Route
            exact
            path="/product/:id"
            component={props => <Product {...props} />}
          />
          <Route
            exact
            path="/login"
            component={props => <Login {...props} />}
          />
          <Route
            exact
            path="/register"
            component={props => <Register {...props} />}
          />
          <Route
            exact
            path="/remember"
            component={props => <Remember {...props} />}
          />
        </Switch>
        {isModal ? (
          <Route exact path="/cart" component={ModalCart} />
        ) : null}
      </div>
    );
  }
}

export default withRouter(Router);
