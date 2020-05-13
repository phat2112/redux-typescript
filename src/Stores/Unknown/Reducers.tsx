import {INITIAL_STATE} from './States'
import * as ListActionsType from './constants'

const setListUnknown = (state = INITIAL_STATE, action: ListActionsType.ListFunctionsType) => {
    switch(action.type){
        case ListActionsType.GET_LIST_UNKNOWN_SUCEESS:
            return {
                ...state,
                dataList: action.dataList
            }
        case ListActionsType.GET_LIST_UNKNOWN_FAIL:
            return {
                ...state,
                error: action.error
            }
        default: 
            return state
    }
}
export const SetListReducer = {
    setListUnknown
}