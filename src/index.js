import 'bootstrap/dist/css/bootstrap.min.css';
import './vendors';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux'; 

import { store, history } from './context';
import registerServiceWorker from './registerServiceWorker';
import App from './app.root';
import { Route } from 'react-router';
import { DEFAULT_ROUTE, HOME_ROUTE, EMPLOYEE_ROUTE, DEPARTMENT_ROUTE, OPTIONAL_ID_ROUTE } from './constants'
import { HomePage, DepartmentPage, EmployeePage } from './pages';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path={DEFAULT_ROUTE} component={App}>
				<Route path={HOME_ROUTE} component={HomePage}></Route>
				<Route path={`${DEPARTMENT_ROUTE}${OPTIONAL_ID_ROUTE}`} component={DepartmentPage}/>
				<Route path={`${EMPLOYEE_ROUTE}${OPTIONAL_ID_ROUTE}`} component={EmployeePage}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
