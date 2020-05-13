import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './Reducers'
import rootSaga from "./Sagas";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(sagaMiddleware),
        )
    )
    sagaMiddleware.run(rootSaga)
    return store
}
export default configureStore
