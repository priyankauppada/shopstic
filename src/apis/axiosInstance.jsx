import axios from "axios"; 
import { API_CONFIG } from "../constants/apiConstants";

const axiosInstance = axios.create({
        baseURL: API_CONFIG.BASE_URL,
        timeOut: API_CONFIG.TIME_OUT
})
axiosInstance. interceptors.request.use(
    (req) => {
        const token = localStorage.getItem(API_CONFIG.TOKEN)
        if(API_CONFIG.TOKEN) {
            req.headers[API_CONFIG.AUTHORIZATION] = `${API_CONFIG.BEARER} ${API_CONFIG.TOKEN}`;
        }
        return req;
    }
)
axiosInstance.interceptors.response.use(
    response =>{
        if(response.headers[API_CONFIG.AUTHORIZATION] != undefined){
            localStorage.setItem(response.headers[API_CONFIG.AUTHORIZATION])

        }
        return response
    },
    error =>{
        return Promise.reject(error)
    }
)

export default axiosInstance;