
import { call, put, takeLatest } from 'redux-saga/effects'
import { employeeApi } from '../../api';
import { 
	EMPLOYEE_CREATE_SUCCEEDED,
	EMPLOYEE_CREATE_FAILED,
	EMPLOYEE_CREATE_REQUESTED
} from '../../state';

function* createEmployee(action) {
	try {
		const employee = yield call(employeeApi.createEmployee, action.payload);
		yield put({type: EMPLOYEE_CREATE_SUCCEEDED, payload: employee, meta: action.meta});
	} catch (e) {
		console.error(e);
		yield put({type: EMPLOYEE_CREATE_FAILED, payload: e, error: true, meta: action.meta});
	}
}

function* createEmployeesSaga() {
	yield takeLatest(EMPLOYEE_CREATE_REQUESTED, createEmployee);
}

export default createEmployeesSaga;