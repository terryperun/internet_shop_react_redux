import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivatRoute extends Component {
  constructor() {
    super();
  }

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        exact
        {...rest}
        render={props =>
          (this.props.isLoginedIn ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          ))
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoginedIn: state.auth.isLoginedIn,
});

export default connect(
  mapStateToProps,
  null,
)(PrivatRoute);
