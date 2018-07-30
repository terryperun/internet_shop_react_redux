import { Component } from 'react';
// import { Link, Router, Route, browserHistory } from 'react-router';
//
// import routes from './routes/index';

class App extends Component {
  render() {
    return (
      this.props.children
    );
  }
}

export default App;
