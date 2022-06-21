import axios from 'axios';

export const axiosInstance = axios.create({
    baseUrl: 'https://expense-tracker-webapp-mern.herokuapp.com/'
})