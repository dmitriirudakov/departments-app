import { fork , all } from 'redux-saga/effects';
import employeeSagas from './employee';
import departmentSagas from './department';

const sagas = [
    ...employeeSagas,
    ...departmentSagas
];

export default function* root() {
    yield all(sagas.map(saga => fork(saga)));
}
