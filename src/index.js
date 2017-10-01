import 'bootstrap/dist/css/bootstrap.min.css';
import './vendors';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import { Provider } from 'react-redux'; 

import registerServiceWorker from './registerServiceWorker';
import App from './app.root';
import { store, history } from './context';
import { DEFAULT_ROUTE, HOME_ROUTE, EMPLOYEE_ROUTE, DEPARTMENT_ROUTE, OPTIONAL_ID_ROUTE, NOT_FOUND_ROUTE } from './constants'
import { HomePage, DepartmentPage, EmployeePage, NotFoundPage } from './pages';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path={DEFAULT_ROUTE} component={App}>
				<IndexRoute component={HomePage}/>
				<Route path={HOME_ROUTE} component={HomePage}></Route>
				<Route path={`${DEPARTMENT_ROUTE}${OPTIONAL_ID_ROUTE}`} component={DepartmentPage}/>
				<Route path={`${EMPLOYEE_ROUTE}${OPTIONAL_ID_ROUTE}`} component={EmployeePage}/>
				<Route path={NOT_FOUND_ROUTE} component={NotFoundPage}></Route>
				<Redirect from='*' to={NOT_FOUND_ROUTE} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
