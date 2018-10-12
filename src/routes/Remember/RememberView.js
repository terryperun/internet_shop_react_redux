import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { RememberForm, FormSuccess } from './components';

class Remember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingAlert: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(rememberState) {
    await fetch('api/v1/auth/remember', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: rememberState.email }),
    })
      .then(res => res.json())
      .then(res => console.log(res));

    this.setState({
      showingAlert: true,
    });
    
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.showingAlert ? (
          <FormSuccess showingAlert={this.state.showingAlert} />
        ) : (
          <RememberForm onSubmit={this.handleSubmit} />
        )}
        <Footer />
      </div>
    );
  }
}

export default Remember;
