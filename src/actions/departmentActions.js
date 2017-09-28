import {
	DEPARTMENT_CREATE_REQUESTED, 
	DEPARTMENT_DELETE_REQUESTED, 
	DEPARTMENT_UPDATE_REQUESTED 
} from '../reducers';

export function createDepartment(payload) {
	return {
		type: DEPARTMENT_CREATE_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	}
}

export function updateDepartment(payload) {
	return {
		type: DEPARTMENT_UPDATE_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	}
}

export function deleteDepartment(payload) {
	return {
		type: DEPARTMENT_DELETE_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	}
}