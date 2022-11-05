import axios from 'axios';

export const BASE_URL = `${window.location.protocol}//${window.location.host}`;

axios.defaults.baseURL = BASE_URL;

export {
    axios
}
