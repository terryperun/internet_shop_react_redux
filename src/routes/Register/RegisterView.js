import React, { Component } from 'react';

import RegisterForm from './components/RegisterForm/RegisterForm';

class Register extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   showingAlert: false,
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(registerState) {
    await fetch('api/v1/auth/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: registerState.emailForm,
        password: registerState.passwordForm1,
        name: registerState.name,
        surname: registerState.surname,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
    this.props.router.push('/loging');
    // console.log('2', registerState);
  }

  render() {
    return (
      <div>
        <RegisterForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Register;
