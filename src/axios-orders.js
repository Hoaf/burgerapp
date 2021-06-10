import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-http-aea3e-default-rtdb.firebaseio.com'
});

export default instance;