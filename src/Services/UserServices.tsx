import Axios from 'axios'

type Pageparams = {
    page: number
}

const getUserList = async (page: number): Promise<Pageparams> => {
    return Axios.get(`https://reqres.in/api/users?page=${page}`).then(res => (res.data))
}
export const UserServices = {
    getUserList,
}