import React, { Component } from 'react';
import s from './RegisterForm.module.css';
// import Api from '../../../../api/Api';

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

  // handleChange(name) {
  //   return (event) => {
  //     this.setState = {
  //       [name]: event.target.value,
  //     };
  //   };
  // }

  handleChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value },
        // , () => {
        // const notValid =
        //   !this.state.name.trim().length !== 0 &&
        //   !this.state.surname.trim().length !== 0 &&
        //   !this.state.emailForm.trim().length !== 0 &&
        //   !this.state.emailForm.includes('@') &&
        //   !this.state.passwordForm1.trim().length !== 0;
        // !this.state.passwordForm2.trim().length >= 8 &&
        // !this.state.passwordForm1 === !this.state.passwordForm2 &&
        // !this.state.passwordForm1.includes('0-9');

        // this.setState({ notValid });
        // }
      );
    };
    // console.log('wwq', this.state);
  }

  // async logged() {
  //   const body = {
  //     email: this.state.emailForm,
  //     password: this.state.passwordForm,
  //   };
  //   const logingToken = await Api.loging(body);
  // }

  render() {
    // console.log('state', this.state);
    const { onSubmit } = this.props;
    return (
      <div className={s.wrapper}>
        <div className={s.nameContainer}>
          <label>
            <input
              type="text"
              name="name"
              className={s.name}
              placeholder=" Name"
              onChange={this.handleChange('name')}
            />
          </label>
        </div>
        <br />
        <div className={s.surnameContainer}>
          <label>
            <input
              type="text"
              name="surname"
              className={s.surname}
              placeholder=" Surname"
              onChange={this.handleChange('surname')}
            />
          </label>
        </div>
        <br />
        <div className={s.emailContainer}>
          <label>
            <input
              type="text"
              name="email"
              className={s.email}
              placeholder=" Email"
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
              className={s.password1}
              placeholder=" Password"
              onChange={this.handleChange('passwordForm1')}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              className={s.password2}
              placeholder=" Repeat password"
              onChange={this.handleChange('passwordForm2')}
            />
          </label>
        </div>
        <div className={s.registration}>
          <button
            type="submit"
            className={s.btnRegistration}
            onClick={() => onSubmit(this.state)}
            // disabled={this.state.notValid}
          >
            Registration
          </button>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
