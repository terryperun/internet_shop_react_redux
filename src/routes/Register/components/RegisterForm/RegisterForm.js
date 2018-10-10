import React, { Component } from 'react';
import s from './RegisterForm.module.css';
import Api from '../../../../api/Api';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notValid: true,
      name: '',
      surname: '',
      emailForm: '',
      passwordForm1: '',
      passwordForm2: '',
    };

    this.handleChange = this.handleChange.bind(this);
    // this.logged = this.logged.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value }, () => {
        const notValid =
          !this.state.name.trim().length !== 0 &&
          !this.state.surname.trim().length !== 0 &&
          !this.state.emailForm.trim().length !== 0 &&
          !this.state.emailForm.includes('@') &&
          !this.state.passwordForm1.trim().length !== 0;
        // !this.state.passwordForm2.trim().length >= 8 &&
        // !this.state.passwordForm1 === !this.state.passwordForm2 &&
        // !this.state.passwordForm1.includes('0-9');

        this.setState({ notValid });
      });
    };
  }

  // async logged() {
  //   const body = {
  //     email: this.state.emailForm,
  //     password: this.state.passwordForm,
  //   };
  //   const logingToken = await Api.loging(body);
  // }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <div className={s.name}>
          <label>
            Name: <br />
            <input
              type="text"
              name="name"
              className={s.name}
              onChange={this.handleChange('name')}
            />
          </label>
        </div>
        <div className={s.email}>
          <label>
            Surname: <br />
            <input
              type="text"
              name="surname"
              className={s.surname}
              onChange={this.handleChange('surname')}
            />
          </label>
        </div>
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
              className={s.password1}
              onChange={this.handleChange('passwordForm1')}
            />
            <input
              type="password"
              name="password"
              className={s.password2}
              onChange={this.handleChange('passwordForm2')}
            />
          </label>
        </div>
        <div className={s.btnLogin}>
          <button
            type="submit"
            onClick={() => this.onSubmit(this.state)}
            disabled={this.state.notValid}
          >
            Registration
          </button>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
