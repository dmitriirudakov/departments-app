import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux'; 

import store from './redux/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { 
	HomePage, 
	DepartmentPage, 
	EmployeePage 
} from './containers';
import { DEFAULT_ROUTE, HOME_ROUTE, EMPLOYEE_ROUTE, DEPARTMENT_ROUTE, OPTIONAL_ID_ROUTE } from './constants'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
window.jQuery = window.jQuery = $;
require('bootstrap');

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path={DEFAULT_ROUTE} component={HomePage}></Route>
			<Route path={HOME_ROUTE} component={HomePage}></Route>
			<Route path={`${DEPARTMENT_ROUTE}${OPTIONAL_ID_ROUTE}`} component={DepartmentPage}/>
			<Route path={`${EMPLOYEE_ROUTE}${OPTIONAL_ID_ROUTE}`} component={EmployeePage}/>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
