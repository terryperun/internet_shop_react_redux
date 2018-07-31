import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ContactForm, FormSuccess } from './components';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingAlert: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      showingAlert: true,
    });
    setTimeout(() => {
      this.setState({
        showingAlert: false,
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.showingAlert
          ? <FormSuccess showingAlert={this.state.showingAlert} />
          : <ContactForm onSubmit={this.handleSubmit} />
        }
        <Footer />
      </div>
    );
  }
}

export default About;
