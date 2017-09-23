import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'; 

import store from './redux/configureStore';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import DepartmentForm from './components/DepartmentForm';
import EmployeeForm from './components/EmployeeForm';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/department(/:id)" component={DepartmentForm}/>
        <Route path="/employee(/:id)" component={EmployeeForm}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
