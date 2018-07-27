import React, { Component } from 'react';

import Header from '../../Header';
import Footer from '../../Footer';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutText: "Write",
      showingAlert: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ aboutText: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      showingAlert: true
    });
    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 3000);
  }

render() {
    return (
      <div>
        <div className="about-header">
          <Header />
        </div>
        <div className="form-div">
          <div className="forms-text">
            <h2>About Us</h2>
            <p>EXIST.UA – це Ваш персональний автоасистент.
Придбати запасні частини та автотовари, оформити автострахування, отримати рекомендацію надійних СТО – все це Ви можете у нас. Ми - єдина точка вирішення питань, пов'язаних з експлуатацією автомобіля.</p>
          </div>
          <div className="about-form">
            <form onSubmit={this.handleSubmit}>
              <div className="forms-name">
                <label >
                  Name: <br />
                  <input type="text" name="username" id="about-name" />
                </label><br />
              </div>
              <div className="forms-email">
                <label >
                  Email: <br />
                  <input type="text" name="email" id="about-email" />
                </label>
              </div>
              <div className="forms-comment">
                <label>
                Comment: <br />
                  <textarea
                    id="about-comment"
                    name="comment"
                    rows="7"
                    value={this.state.aboutText}
                    onChange={this.handleChange}
                  />
                </label><br />
              </div>
              <input type="submit" value="Submit" />
            </form>
            <div className={this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}>
              <p>Дякуємо, ваша думка дуже важлива для нас</p>
            </div>
          </div>
          {this.state.aboutText}
        </div>
        <Footer />
      </div>
    );
  }
}
export default About
