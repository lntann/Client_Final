import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api-hl25.onrender.com/api/',
  withCredentials: true
});


