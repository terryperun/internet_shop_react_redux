import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={<Redirect to="/login" />} />
);

const mapStateToProps = state => ({
  isLoginedIn: state.auth.isLoginedIn,
});

export default connect(
  mapStateToProps,
  null,
)(PrivateRoute);
