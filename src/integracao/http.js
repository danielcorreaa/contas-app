import axios from "axios";
import User from "./decodejwt";


const http = axios.create({
    baseURL: process.env.REACT_APP_LINK_API,
    headers: {
        Accept: 'application/json',
        Content: 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        
    }
})

http.interceptors.request.use(function (config) {
    // Do something before request is sent (ou "fazer alguma coisa com o erro da requisição")
   
    const token = sessionStorage.getItem('token')
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
        config.headers.user = User()
    }
    return config;
}, function (error) {
    // Do something with request error (ou "fazer alguma coisa com o erro da requisição")
    console.log('erro no interceptor do axios')
    return Promise.reject(error);
});

export default http

