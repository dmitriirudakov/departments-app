
import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../api/departmentApi';
import { 
    DEPARTMENT_DELETE_SUCCEEDED, 
    DEPARTMENT_DELETE_FAILED, 
    DEPARTMENT_DELETE_REQUESTED 
} from '../../redux/reducers/departmentsReducer';

function* deleteDepartment(action) {
    try {
        yield call(api.deleteDepartment, action.payload.id);
        yield put({type: DEPARTMENT_DELETE_SUCCEEDED, payload: action.payload});
    } catch (e) {
        console.error(e);
        yield put({type: DEPARTMENT_DELETE_FAILED, message: e.message});
    }
}

function* deleteDepartmentsSaga() {
    yield takeLatest(DEPARTMENT_DELETE_REQUESTED, deleteDepartment);
}

export default deleteDepartmentsSaga;