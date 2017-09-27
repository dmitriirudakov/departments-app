
import { call, put, takeLatest } from 'redux-saga/effects'
import { departmentApi } from '../../api';
import { 
	DEPARTMENTS_FETCH_SUCCEEDED, 
	DEPARTMENTS_FETCH_FAILED, 
	DEPARTMENTS_FETCH_REQUESTED 
} from '../../reducers';

function* fetchDepartments(action) {
	try {
		const departments = yield call(departmentApi.fetchDepartments);
		yield put({type: DEPARTMENTS_FETCH_SUCCEEDED, payload: departments});
	} catch (e) {
		console.error(e);
		yield put({type: DEPARTMENTS_FETCH_FAILED, message: e.message});
	}
}

function* fetchDepartmentsSaga() {
	yield takeLatest(DEPARTMENTS_FETCH_REQUESTED, fetchDepartments);
}

export default fetchDepartmentsSaga;