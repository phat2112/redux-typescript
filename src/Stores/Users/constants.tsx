export const GET_USER_LIST = 'GET_USER_LIST'
export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS'
export const GET_USER_LIST_FAIL = 'GET_USER_LIST_FAIL'

export type GetUserFunction = {
    type: typeof GET_USER_LIST;
    page: number;
}
export type setUserFunction = {
    type: typeof GET_USER_LIST_SUCCESS;
    userList: object;
}
export type getUserErrorFunction = {
    type: typeof GET_USER_LIST_FAIL;
    error: string;
}

export type UserFunction = GetUserFunction | setUserFunction | getUserErrorFunction;