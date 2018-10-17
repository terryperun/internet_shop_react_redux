import React, { Component } from 'react';
import { withRouter, browserHistory } from 'react-router';

import LoginForm from './components/LoginForm/LoginForm';

class Login extends Component {
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
    console.log('worK');
    fetch('api/v1/auth/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        // Accept: 'application/json',
      },
      body: JSON.stringify({
        email: loginState.emailForm,
        password: loginState.passwordForm,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));

    this.setState({
      showingAlert: true,
    });
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

export default withRouter(Login);
