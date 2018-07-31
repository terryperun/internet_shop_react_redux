import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutText: '',
      emailForm: '',
      nameForm: '',
      notValid: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState(
        { [name]: event.target.value },
        () => {
          const notValid = (
            (!this.state.nameForm.trim().length !== 0) &&
            (!this.state.aboutText.trim().length !== 0) &&
            (!this.state.emailForm.trim().length !== 0) &&
            (!this.state.emailForm.includes('@'))
          );

          this.setState({ notValid });
        },
      );
    };
  }

  render() {
    return (
      <div className={s.formContainer}>
        <div className={s.formsInfo}>
          <h2>About Us</h2>
          <p>EXIST.UA – це Ваш персональний автоасистент.
            Придбати запасні частини та автотовари, оформити автострахування,
            отримати рекомендацію надійних СТО – все це Ви можете у нас. Ми - єдина
            точка вирішення питань, повязаних з експлуатацією автомобіля.
          </p>
        </div>
        <div>
          <div className={s.userName}>
            <label >
              Name: <br />
              <input
                type="text"
                name="username"
                id="about-name"
                onChange={this.handleChange('nameForm')}
              />
            </label><br />
          </div>
          <div className={s.email}>
            <label >
              Email: <br />
              <input
                type="text"
                name="email"
                id="about-email"
                onChange={this.handleChange('emailForm')}
              />
            </label>
          </div>
          <div className={s.comment}>
            <label>
            Comment: <br />
              <textarea
                id="about-comment"
                name="comment"
                rows="7"
                value={this.state.aboutText}
                onChange={this.handleChange('aboutText')}
              />
            </label>
          </div>
          <button
            type="submit"
            onClick={() => this.props.onSubmit(this.state)}
            disabled={this.state.notValid}
          >
               Send
          </button>
        </div>
      </div>


    );
  }
}
export default ContactForm;
