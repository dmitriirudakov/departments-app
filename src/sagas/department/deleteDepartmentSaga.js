
import { call, put, takeLatest } from 'redux-saga/effects'
import { departmentApi } from '../../api';
import {
	DEPARTMENT_DELETE_SUCCEEDED, 
	DEPARTMENT_DELETE_FAILED, 
	DEPARTMENT_DELETE_REQUESTED 
} from '../../reducers';

function* deleteDepartment(action) {
	try {
		yield call(departmentApi.deleteDepartment, action.payload.id);
		yield put({type: DEPARTMENT_DELETE_SUCCEEDED, payload: action.payload, meta: action.meta});
	} catch (e) {
		console.error(e);
		yield put({type: DEPARTMENT_DELETE_FAILED, message: e.message, meta: action.meta});
	}
}

function* deleteDepartmentsSaga() {
	yield takeLatest(DEPARTMENT_DELETE_REQUESTED, deleteDepartment);
}

export default deleteDepartmentsSaga;