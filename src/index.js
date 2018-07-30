import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import routes from './routes/router';

ReactDOM.render(
  <App>
    <Router history={browserHistory} routes={routes} />
  </App>,
  document.getElementById('root'),
);
registerServiceWorker();
