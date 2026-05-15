import axios from 'axios';

export const API_URL = __DEV__
? "https://vendors-festivals-yoga-valid.trycloudflare.com/api"
: "https://vitalops-api.onrender.com/api";

export const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});
