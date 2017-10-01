
import { call, put, takeLatest } from 'redux-saga/effects'
import { employeeApi } from '../../api';
import { 
	EMPLOYEE_UPDATE_SUCCEEDED,
	EMPLOYEE_UPDATE_FAILED,
	EMPLOYEE_UPDATE_REQUESTED
} from '../../state';

function* updateEmployee(action) {
	try {
		const employees = yield call(employeeApi.updateEmployee, action.payload.id, action.payload);
		yield put({type: EMPLOYEE_UPDATE_SUCCEEDED, payload: employees, meta: action.meta });
	} catch (e) {
		console.error(e);
		yield put({type: EMPLOYEE_UPDATE_FAILED, payload: e, error: true, meta: action.meta});
	}
}

function* updateEmployeeSaga() {
	yield takeLatest(EMPLOYEE_UPDATE_REQUESTED, updateEmployee);
}

export default updateEmployeeSaga;