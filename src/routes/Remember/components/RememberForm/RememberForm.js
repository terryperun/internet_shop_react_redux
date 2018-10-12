import React, { Component } from 'react';
import s from './RememberForm.module.css';

class RememberForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailForm: '',
      notValid: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value }, () => {
        const notValid =
          !this.state.emailForm.trim().length !== 0 &&
          !this.state.emailForm.includes('@');

        this.setState({ notValid });
      });
    };
  }

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.emailContainer}>
          <label>
            <input
              type="text"
              className={s.email}
              name="email"
              id="about-email"
              placeholder="Write your email"
              onChange={this.handleChange('emailForm')}
            />
          </label>
        </div>
        <button
          type="submit"
          className={s.btnSend}
          onClick={() => this.props.onSubmit(this.state)}
          disabled={this.state.notValid}
        >
          Send
        </button>
      </div>
    );
  }
}
export default RememberForm;
