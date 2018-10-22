import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

  async login(loginState) {
    await this.props.loginUser(
      loginState.emailForm,
      loginState.passwordForm,
    );
    this.props.history.push('/admin');
  }

  forgotPassword() {
    this.props.history.push('/remember');
  }

  haveNotAccount() {
    this.props.history.push('/register');
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
