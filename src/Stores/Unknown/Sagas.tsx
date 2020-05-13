import {put, call, takeLatest} from 'redux-saga/effects'
import {ListServices} from '../../Services/ListServices'
import * as ListACtionsType from './constants'
import {ListActions} from './Actions'

function* getListUnknown(){
    try{
        const response = yield call(ListServices.getListUnknown)
        yield put(ListActions.setListUnknown(response))
    } catch (error) {
        yield put(ListActions.getListUnknownError(error.toString()))
    }
}
export default function* watcher(){
    yield takeLatest(ListACtionsType.GET_LIST_UNKNOWN, getListUnknown)
}