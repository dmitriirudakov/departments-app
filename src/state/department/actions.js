export const DEPARTMENTS_FETCH_REQUESTED = 'DEPARTMENTS::FETCH_REQUESTED';
export const DEPARTMENTS_FETCH_SUCCEEDED = 'DEPARTMENTS::FETCH_SUCCEEDED';
export const DEPARTMENTS_FETCH_FAILED = 'DEPARTMENTS::FETCH_FAILED';

export const DEPARTMENT_CREATE_REQUESTED = 'DEPARTMENT::CREATE_REQUESTED';
export const DEPARTMENT_CREATE_SUCCEEDED = 'DEPARTMENT::CREATE_SUCCEEDED';
export const DEPARTMENT_CREATE_FAILED = 'DEPARTMENT::CREATE_FAILED';

export const DEPARTMENT_DELETE_REQUESTED = 'DEPARTMENT::DELETE_REQUESTED';
export const DEPARTMENT_DELETE_SUCCEEDED = 'DEPARTMENT::DELETE_SUCCEEDED';
export const DEPARTMENT_DELETE_FAILED = 'DEPARTMENT::DELETE_FAILED';

export const DEPARTMENT_UPDATE_REQUESTED = 'DEPARTMENT::UPDATE_REQUESTED';
export const DEPARTMENT_UPDATE_SUCCEEDED = 'DEPARTMENT::UPDATE_SUCCEEDED';
export const DEPARTMENT_UPDATE_FAILED = 'DEPARTMENT::UPDATE_FAILED';

export function fetchDepartments(payload) {
	return {
		type: DEPARTMENTS_FETCH_REQUESTED, 
		payload,
		meta: {
			thunk: true
		}
	}
}

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