import React, { Component } from 'react';

import LoginForm from './components/LoginForm/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingAlert: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(loginState) {
    fetch('api/v1/auth/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        // Accept: 'application/json',
      },
      body: JSON.stringify({
        email: loginState.email,
        password: loginState.password,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));

    this.setState({
      showingAlert: true,
    });
  }

  initializationEnter() {
    if (!this.state.showingAlert) {
      return <LoginForm onSubmit={this.handleSubmit} />;
    }
    return <div>Data validation</div>;
  }

  render() {
    const content = this.initializationEnter();
    return (
      <div>
        {content}
        {/* <LoginForm onSubmit={this.handleSubmit} /> */}
      </div>
    );
  }
}

export default Login;
