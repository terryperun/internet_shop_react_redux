import React, { Component } from 'react';
import { withRouter, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import T from 'prop-types';

import LoginForm from './components/LoginForm/LoginForm';
import * as authOperations from '../../modules/auth/authOperations';

class Login extends Component {
  static propTypes = {
    loginUser: T.func,
  };
  constructor(props) {
    super(props);

    this.state = {
      showingAlert: false,
    };
    this.login = this.login.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.haveNotAccount = this.haveNotAccount.bind(this);
  }

  login(loginState) {
    this.props.loginUser(
      loginState.emailForm,
      loginState.passwordForm,
    );
  }

  forgotPassword() {
    browserHistory.push('/remember');
  }

  haveNotAccount() {
    browserHistory.push('/register');
  }

  initializationEnter() {
    if (!this.state.showingAlert) {
      return (
        <LoginForm
          onLogin={this.login}
          onRemember={this.forgotPassword}
          onRegister={this.haveNotAccount}
        />
      );
    }
    return <div>Data validation</div>;
  }

  render() {
    const content = this.initializationEnter();
    return <div>{content}</div>;
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = {
  loginUser: authOperations.loginUser,
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login));
