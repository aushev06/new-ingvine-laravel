import axios from 'axios';

export const BASE_URL = 'http://new.ingvine-food.ru';

axios.defaults.baseURL = BASE_URL;

export {
    axios
}
