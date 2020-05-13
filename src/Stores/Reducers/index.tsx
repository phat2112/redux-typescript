import {combineReducers} from 'redux'
import {UserListReducers} from '../Users/Reducers';
import {SetListReducer} from '../Unknown/Reducers'



const rootReducer = combineReducers({
    UserReducers: UserListReducers.setListUser,
    ListReducers: SetListReducer.setListUnknown
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer