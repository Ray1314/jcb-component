import { call, put, takeEvery, all} from 'redux-saga/effects';
import actions from './actions'
import { saga as home } from "../pages/home/store"
export function* fetchProject(action) {
    const num = yield call(() => { return action.num })
    yield put(actions.increase(num))
}

function* mainSaga() {
    yield takeEvery('减saga', fetchProject);
}
const run = (sagas) => sagas.map((saga) => saga());
function* rootSaga() {
    yield all([
        ...run([
            mainSaga,
            home
        ])
    ])
}
export default rootSaga;