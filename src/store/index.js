import { createStore, applyMiddleware,compose } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootReducer from './reducer';
import rootSaga  from './saga';

// 创建中间件
const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

const middlewareEnhancer = applyMiddleware(...middleWares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);

const store = createStore(
    rootReducer,
    composedEnhancers
)

sagaMiddleware.run(rootSaga);
export default store