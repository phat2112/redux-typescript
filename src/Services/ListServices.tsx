import Axios from 'axios'
import {decamelizeKeys, camelizeKeys} from 'humps'

const getListUnknown = () => {
    return Axios.get('https://reqres.in/api/unknown').then(res => camelizeKeys(res.data))
}
export const ListServices = {
    getListUnknown
}