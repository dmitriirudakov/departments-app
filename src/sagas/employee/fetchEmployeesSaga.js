
import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../api/employeeApi';
import { 
    EMPLOYEES_FETCH_SUCCEEDED, 
    EMPLOYEES_FETCH_FAILED, 
    EMPLOYEES_FETCH_REQUESTED 
} from '../../redux/reducers/employeesReducer';

function* fetchEmployees(action) {
    try {
        const employees = yield call(api.fetchEmployees);
        yield put({type: EMPLOYEES_FETCH_SUCCEEDED, payload: employees });
    } catch (e) {
        console.error(e);
        yield put({type: EMPLOYEES_FETCH_FAILED, message: e.message});
    }
}

function* fetchEmployeesSaga() {
    yield takeLatest(EMPLOYEES_FETCH_REQUESTED, fetchEmployees);
}

export default fetchEmployeesSaga;