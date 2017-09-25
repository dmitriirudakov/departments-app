
import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../api/employeeApi';
import { 
    EMPLOYEE_UPDATE_SUCCEEDED, 
    EMPLOYEE_UPDATE_FAILED, 
    EMPLOYEE_UPDATE_REQUESTED 
} from '../../redux/reducers/employeesReducer';

function* updateEmployee(action) {
    try {
        const employees = yield call(api.updateEmployee, action.payload.id, action.payload);
        yield put({type: EMPLOYEE_UPDATE_SUCCEEDED, payload: employees });
    } catch (e) {
        console.error(e);
        yield put({type: EMPLOYEE_UPDATE_FAILED, message: e.message});
    }
}

function* updateEmployeeSaga() {
    yield takeLatest(EMPLOYEE_UPDATE_REQUESTED, updateEmployee);
}

export default updateEmployeeSaga;