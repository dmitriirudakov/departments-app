
import { call, put, takeLatest } from 'redux-saga/effects'
import { employeeApi } from '../../api';
import { 
	EMPLOYEES_FETCH_SUCCEEDED, 
	EMPLOYEES_FETCH_FAILED, 
	EMPLOYEES_FETCH_REQUESTED 
} from '../../state';

function* fetchEmployees(action) {
	try {
		const employees = yield call(employeeApi.fetchEmployees);
		yield put({type: EMPLOYEES_FETCH_SUCCEEDED, payload: employees, meta: action.meta});
	} catch (e) {
		console.error(e);
		yield put({type: EMPLOYEES_FETCH_FAILED, payload: e, error: true, meta: action.meta});
	}
}

function* fetchEmployeesSaga() {
	yield takeLatest(EMPLOYEES_FETCH_REQUESTED, fetchEmployees);
}

export default fetchEmployeesSaga;