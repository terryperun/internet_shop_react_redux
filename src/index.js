import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/createStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes/router';

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Router history={browserHistory} routes={routes} />
    </App>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
