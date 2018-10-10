import React, { Component } from 'react';
import s from './loginForm.module.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.logged = this.logged.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  render() {
    console.log('state', this.state);
    return (
      <div className={s.wrapper}>
        <div className={s.emailContainer}>
          <label>
            <input
              type="email"
              name="email"
              className={s.email}
              required
              placeholder="Email"
              onChange={this.handleChange('emailForm')}
            />
          </label>
        </div>
        <br />
        <div className={s.passwordContainer}>
          <label>
            <input
              type="password"
              name="password"
              className={s.password}
              onChange={this.handleChange('passwordForm')}
              required
              placeholder="Password"
            />
          </label>
        </div>
        <div className={s.login}>
          <button
            className={s.btnLogin}
            type="submit"
            onClick={() => this.props.handleSubmit(this.state)}
          >
            Login
          </button>
        </div>
        <div className={s.forgotPasswordContainer}>
          <button
            className={s.forgotPassword}
            onClick={() => console.log('work btn forgot')}
          >
            I forgot password
          </button>
        </div>
        <div className={s.havntAccountContainer}>
          <button
            className={s.havntAccount}
            onClick={() => console.log('work btn hvnt acc')}
          >
            I havn't account
          </button>
        </div>
      </div>
    );
  }
}
export default LoginForm;
