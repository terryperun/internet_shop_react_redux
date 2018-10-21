import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from './components/RegisterForm/RegisterForm';
import * as authOperations from '../../modules/auth/authOperations';
// import Api from '../../api/Api';

class Register extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   showingAlert: false,
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(registerState) {
    this.props.registerUser(registerState);
  }

  render() {
    return (
      <div>
        <RegisterForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
const mapStateToProps = () => ({});

const mapDispatchToProps = {
  registerUser: authOperations.registerUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
// export default Register;
