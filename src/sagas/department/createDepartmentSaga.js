
import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../api/departmentApi';
import { 
    DEPARTMENT_CREATE_SUCCEEDED, 
    DEPARTMENT_CREATE_FAILED, 
    DEPARTMENT_CREATE_REQUESTED 
} from '../../redux/reducers/departmentsReducer';

function* createDepartment(action) {
    try {
        const department = yield call(api.createDepartment, action.payload);
        yield put({type: DEPARTMENT_CREATE_SUCCEEDED, payload: department});
    } catch (e) {
        console.error(e);
        yield put({type: DEPARTMENT_CREATE_FAILED, message: e.message});
    }
}

function* createDepartmentsSaga() {
    yield takeLatest(DEPARTMENT_CREATE_REQUESTED, createDepartment);
}

export default createDepartmentsSaga;