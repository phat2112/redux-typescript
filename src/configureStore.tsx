import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Stores/Reducers'
import "regenerator-runtime/runtime";

function* exampleSaga() {
  console.log("Example saga reached");
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(exampleSaga);
