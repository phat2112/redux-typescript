export const GET_LIST_UNKNOWN = 'GET_LIST_UNKNOWN'
export const GET_LIST_UNKNOWN_SUCEESS = 'GET_LIST_UNKNOWN_SUCCESS'
export const GET_LIST_UNKNOWN_FAIL = 'GET_LIST_UNKNOWN_FAIL'

export type GetListFunctionType = {
    type: typeof GET_LIST_UNKNOWN,
}
export type SetListfunctionType = {
    type: typeof  GET_LIST_UNKNOWN_SUCEESS,
    dataList: object
}
export type GetListErrorFunctionType = {
    type: typeof GET_LIST_UNKNOWN_FAIL,
    error: string
} 
export type  ListFunctionsType = GetListFunctionType | SetListfunctionType | GetListErrorFunctionType