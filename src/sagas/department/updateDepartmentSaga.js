
import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../api/departmentApi';
import { 
    DEPARTMENT_UPDATE_SUCCEEDED, 
    DEPARTMENT_UPDATE_FAILED, 
    DEPARTMENT_UPDATE_REQUESTED 
} from '../../redux/reducers/departmentsReducer';

function* updateDepartment(action) {
    try {
        const departments = yield call(api.updateDepartment, action.payload.id, action.payload);
        yield put({type: DEPARTMENT_UPDATE_SUCCEEDED, payload: departments });
    } catch (e) {
        console.error(e);
        yield put({type: DEPARTMENT_UPDATE_FAILED, message: e.message});
    }
}

function* updateDepartmentSaga() {
    yield takeLatest(DEPARTMENT_UPDATE_REQUESTED, updateDepartment);
}

export default updateDepartmentSaga;