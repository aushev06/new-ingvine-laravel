import {axios} from "../core/axios";

export const login = async fields => {
    const {data} = await axios.post('/login', fields)

    return data
}

export const getMe = async () => {
    const {data} = await axios.get('/user')

    return data;
}

export const logout = async () => {
    await axios.post('/logout');
}

export const register = async (fields) => {
    const { data } = await axios.post('/register', fields);

    return data;
}

export const getCsrf = async () => {
    return await axios.get('/sanctum/csrf-cookie');
}
