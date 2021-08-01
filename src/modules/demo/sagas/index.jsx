import { fork, cancel, call, put, all, takeEvery, takeLatest } from 'redux-saga/effects';
import api from '../../common/api';
import { listConstants } from '../constants';

let taskUsers;

export function* callGetUsersAsync() {
    try {
        yield put({ type: listConstants.GET_USERS_START });

        const data = yield call(api.get, 'https://6106bd3c1f34870017437a2c.mockapi.io/api/v1/users');
        yield put({ type: listConstants.GET_USERS_SUCCESS, data });
    } catch (e) {
        console.log(e);
    }
}
export function* callGetUsersAsyncTask(action) {
    if (taskUsers) {
        yield cancel(taskUsers);
    }
    taskUsers = yield fork(callGetUsersAsync);
}
export function* watchGetUsers() {
    yield takeEvery(listConstants.GET_USERS, callGetUsersAsyncTask);
}