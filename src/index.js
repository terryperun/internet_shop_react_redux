import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import store from './store/createStore';
import { store, persistor } from './store/createStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes/router';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App>
        <Router history={browserHistory} routes={routes} />
      </App>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
