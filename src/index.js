import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'; 

import store from './redux/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { 
  HomePageContainer, 
  DepartmentPageContainer, 
  EmployeePageContainer 
} from './containers';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
window.jQuery = window.jQuery = $;
require('bootstrap');

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={HomePageContainer}></Route>
      <Route path="/home" component={HomePageContainer}></Route>
      <Route path="/department(/:id)" component={DepartmentPageContainer}/>
      <Route path="/employee(/:id)" component={EmployeePageContainer}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
