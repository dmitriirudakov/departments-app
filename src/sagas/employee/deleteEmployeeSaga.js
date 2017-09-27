
import { call, put, takeLatest } from 'redux-saga/effects'
import { employeeApi } from '../../api';
import { 
	EMPLOYEE_DELETE_SUCCEEDED, 
	EMPLOYEE_DELETE_FAILED, 
	EMPLOYEE_DELETE_REQUESTED 
} from '../../reducers';

function* deleteEmployee(action) {
	try {
		yield call(employeeApi.deleteEmployee, action.payload.id);
		yield put({type: EMPLOYEE_DELETE_SUCCEEDED, payload: action.payload});
	} catch (e) {
		console.error(e);
		yield put({type: EMPLOYEE_DELETE_FAILED, message: e.message});
	}
}

function* deleteEmployeesSaga() {
	yield takeLatest(EMPLOYEE_DELETE_REQUESTED, deleteEmployee);
}

export default deleteEmployeesSaga;