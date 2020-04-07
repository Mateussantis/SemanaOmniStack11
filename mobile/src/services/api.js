import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://192.168.100.96:3333'
});

export default api;