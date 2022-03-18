import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://puffleprojectecommerce.herokuapp.com/api/'
})