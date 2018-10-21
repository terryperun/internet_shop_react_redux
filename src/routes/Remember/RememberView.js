import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { RememberForm, FormSuccess } from './components';

class Remember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingAlert: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(rememberState) {
    fetch('api/v1/auth/remember', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: rememberState.emailForm }),
    })
      .then(res => res.json())
      .then(res => console.log(res));

    this.setState({
      showingAlert: true,
    });
    setTimeout(() => this.props.history.push('/login'), 3000);
  }

  render() {
    return (
      <div>
        {this.state.showingAlert ? (
          <FormSuccess showingAlert={this.state.showingAlert} />
        ) : (
          <RememberForm onSubmit={this.handleSubmit} />
        )}
      </div>
    );
  }
}

export default withRouter(Remember);
