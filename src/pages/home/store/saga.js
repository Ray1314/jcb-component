import { call, put, takeEvery } from 'redux-saga/effects';
import actions from './actions'
export function* fetchProject(action) {
    const num = yield call(() => { return new Promise((re,ro) => { setTimeout(() => { re(action.num) }, 3000) })});
    console.log(num)
    yield put(actions.increase(num))
}

export default function* rootSaga() {
    yield takeEvery('乘saga', fetchProject);
}