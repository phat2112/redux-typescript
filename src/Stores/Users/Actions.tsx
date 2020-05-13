import * as actions from './constants'

export const getUserList = (page: number): actions.GetUserFunction => ({
    type: actions.GET_USER_LIST,
    page
})
export const setUserList = (userList: object): actions.setUserFunction => ({
    type: actions.GET_USER_LIST_SUCCESS,
    userList
})
export const getUserListError = (error : string): actions.getUserErrorFunction => ({
    type: actions.GET_USER_LIST_FAIL,
    error
})
