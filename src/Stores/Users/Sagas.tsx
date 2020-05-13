import {put, call, takeLatest} from 'redux-saga/effects'
import {UserServices} from '../../Services/UserServices'
import * as ActionsType from './constants'
import * as ActionsCreator from './Actions'

function* getUserList({page}: ActionsType.GetUserFunction){
    try{
        const response = yield call(UserServices.getUserList, page);
        yield put(ActionsCreator.setUserList(response))
    } catch(error){
        yield put(ActionsCreator.getUserListError(error))
    }
}
export default function* watcher(){
    yield takeLatest(ActionsType.GET_USER_LIST, getUserList)
}