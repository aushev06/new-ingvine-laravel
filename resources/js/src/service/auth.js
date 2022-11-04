import {axios} from "../core/axios";

export const login = fields => {
    const {data} = axios.post('/auth/login', fields)

    return data
}

export const getMe = async () => {
    const {data} = await axios.get('/api/user')

    return data;
}
