import * as ListActionsType from './constants'

const getListUnknown = () => ({
    type: ListActionsType.GET_LIST_UNKNOWN
})
const setListUnknown = (dataList: object): ListActionsType.SetListfunctionType => ({
    type: ListActionsType.GET_LIST_UNKNOWN_SUCEESS,
    dataList,
})
const getListUnknownError = (error: string): ListActionsType.GetListErrorFunctionType => ({
    type: ListActionsType.GET_LIST_UNKNOWN_FAIL,
    error
})

export const ListActions = {
    getListUnknown,
    setListUnknown,
    getListUnknownError,
}