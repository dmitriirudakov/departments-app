import { fork , all } from 'redux-saga/effects';
import employeeSagas from './employeeSagas';
import departmentSagas from './departmentSagas';

const sagas = [
    employeeSagas,
    departmentSagas
];

export default function* root() {
    yield all(sagas.map(saga => fork(saga)));
}
