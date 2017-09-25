
import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../api/employeeApi';
import { 
    EMPLOYEE_DELETE_SUCCEEDED, 
    EMPLOYEE_DELETE_FAILED, 
    EMPLOYEE_DELETE_REQUESTED 
} from '../../redux/reducers/employeesReducer';

function* deleteEmployee(action) {
    try {
        yield call(api.deleteEmployee, action.payload.id);
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