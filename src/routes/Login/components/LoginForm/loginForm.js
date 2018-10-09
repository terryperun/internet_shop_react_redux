import React, { Component } from 'react';
import s from './loginForm.module.css';
import Api from '../../../../api/Api';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.logged = this.logged.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  async logged() {
    const body = {
      email: this.state.emailForm,
      password: this.state.passwordForm,
    };
    const logingToken = await Api.loging(body);
  }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <div className={s.email}>
          <label>
            Email: <br />
            <input
              type="text"
              name="email"
              className={s.email}
              onChange={this.handleChange('emailForm')}
            />
          </label>
        </div>
        <div className={s.password}>
          <label>
            Your password: <br />
            <input
              type="password"
              name="password"
              className={s.password}
              onChange={this.handleChange('passwordForm')}
            />
          </label>
        </div>
        <div className={s.btnLogin}>
          <button type="submit" onClick={() => this.logged}>
            Login
          </button>
        </div>
        <div className={s.forgotPassword}>
          <button onClick={() => console.log('work btn forgot')}>
            I forgot password
          </button>
        </div>
        <div className={s.havntAccount}>
          <button onClick={() => console.log('work btn hvnt acc')}>
            I havn't account
          </button>
        </div>
      </div>
    );
  }
}
export default LoginForm;
