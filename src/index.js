import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  browserHistory,
  // Route,
  // Link,
  // Redirect,
} from 'react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import store from './store/createStore';
import * as appOperations from './modules/app/operations';
import { store, persistor } from './store/createStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes/router';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInitialized: false,
    };
  }

  async componentDidMount() {
    await persistor.persist();
    await store.dispatch(appOperations.init());
    // console.log(appOperations);
    this.setState({ isInitialized: true });
  }

  render() {
    if (!this.state.isInitialized) {
      return <div>Loading..</div>;
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App>
            <Router history={browserHistory} routes={routes} />
          </App>
        </PersistGate>
      </Provider>
    );
  }
}
ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
