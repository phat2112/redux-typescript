import * as actions from './constants'
import {INITIAL_STATE} from './State'

const setListUser = (state = INITIAL_STATE, action: actions.UserFunction) => {
    switch(action.type){
        case actions.GET_USER_LIST_SUCCESS:
            return {
                ...state,
                userList: action.userList
            }
        case actions.GET_USER_LIST_FAIL: 
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
export const UserListReducers = {
    setListUser
}