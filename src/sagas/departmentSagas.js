
import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../api/departmentApi';
import { 
    DEPARTMENTS_FETCH_SUCCEEDED, 
    DEPARTMENTS_FETCH_FAILED, 
    DEPARTMENTS_FETCH_REQUESTED 
} from '../redux/reducers/departmentsReducer';

function* fetchDepartments(action) {
   try {
      const departments = yield call(api.fetchDepartments);
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