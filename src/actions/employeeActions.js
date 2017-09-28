import { 
	EMPLOYEE_CREATE_REQUESTED, 
	EMPLOYEE_DELETE_REQUESTED, 
	EMPLOYEE_UPDATE_REQUESTED 
} from '../reducers';

export function createEmployee(payload) {
	return {
		type: EMPLOYEE_CREATE_REQUESTED, 
		payload
	};
}

export function updateEmployee(payload) {
	return {
		type: EMPLOYEE_UPDATE_REQUESTED, 
		payload
	};
}

export function deleteEmployee(payload) {
	return {
		type: EMPLOYEE_DELETE_REQUESTED, 
		payload
	};
}
