import {all} from 'redux-saga/effects'
import UserSaga from '../Users/Sagas'
import ListSaa from '../Unknown/Sagas'

export default function* rootSaga(){
	yield all([
		UserSaga(),
		ListSaa(),
	])
}
