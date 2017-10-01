export const EMPLOYEES_FETCH_REQUESTED = 'EMPLOYEES::FETCH_REQUESTED';
export const EMPLOYEES_FETCH_SUCCEEDED = 'EMPLOYEES::FETCH_SUCCEEDED';
export const EMPLOYEES_FETCH_FAILED = 'EMPLOYEES::FETCH_FAILED';

export const EMPLOYEE_CREATE_REQUESTED = 'EMPLOYEE::CREATE_REQUESTED';
export const EMPLOYEE_CREATE_SUCCEEDED = 'EMPLOYEE::CREATE_SUCCEEDED';
export const EMPLOYEE_CREATE_FAILED = 'EMPLOYEE::CREATE_FAILED';

export const EMPLOYEE_DELETE_REQUESTED = 'EMPLOYEE::DELETE_REQUESTED';
export const EMPLOYEE_DELETE_SUCCEEDED = 'EMPLOYEE::DELETE_SUCCEEDED';
export const EMPLOYEE_DELETE_FAILED = 'EMPLOYEE::DELETE_FAILED';

export const EMPLOYEE_UPDATE_REQUESTED = 'EMPLOYEE::UPDATE_REQUESTED';
export const EMPLOYEE_UPDATE_SUCCEEDED = 'EMPLOYEE::UPDATE_SUCCEEDED';
export const EMPLOYEE_UPDATE_FAILED = 'EMPLOYEE::UPDATE_FAILED';

export function fetchEmployees(payload) {
	return {
		type: EMPLOYEES_FETCH_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	}
}

export function createEmployee(payload) {
	return {
		type: EMPLOYEE_CREATE_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	};
}

export function updateEmployee(payload) {
	return {
		type: EMPLOYEE_UPDATE_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	};
}

export function deleteEmployee(payload) {
	return {
		type: EMPLOYEE_DELETE_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	};
}
