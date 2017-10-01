import { isPending } from 'redux-saga-thunk';

import { 
	EMPLOYEES_FETCH_REQUESTED,
	EMPLOYEE_CREATE_REQUESTED,
	EMPLOYEE_UPDATE_REQUESTED,
	EMPLOYEE_DELETE_REQUESTED,
	DEPARTMENTS_FETCH_REQUESTED,
	DEPARTMENT_CREATE_REQUESTED,
	DEPARTMENT_UPDATE_REQUESTED,
	DEPARTMENT_DELETE_REQUESTED
} from '../state';

function isAnyFetchLoading(state) {
	return isPending(state, EMPLOYEES_FETCH_REQUESTED) 
		|| isPending(state, DEPARTMENTS_FETCH_REQUESTED);
}

function isAnyDepartmentActionLoading(state) {
	return isPending(state, DEPARTMENT_CREATE_REQUESTED)
		|| isPending(state, DEPARTMENT_UPDATE_REQUESTED)
		|| isPending(state, DEPARTMENT_DELETE_REQUESTED);
}

function isAnyEmployeeActionLoading(state) {
	return isPending(state, EMPLOYEE_CREATE_REQUESTED)
		|| isPending(state, EMPLOYEE_UPDATE_REQUESTED)
		|| isPending(state, EMPLOYEE_DELETE_REQUESTED);
}

const loading = { isAnyFetchLoading, isAnyDepartmentActionLoading, isAnyEmployeeActionLoading };

export { loading };