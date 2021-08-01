import { take, fork, cancel, call, put, all, takeEvery } from 'redux-saga/effects';
import { watchGetUsers } from './modules/demo/sagas';

export function* rootSaga() {
    yield all([
        watchGetUsers()
    ]);
}
