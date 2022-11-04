import axios from 'axios';

export const BASE_URL = 'http://' + window.location.host;

axios.defaults.baseURL = BASE_URL;

export {
    axios
}
