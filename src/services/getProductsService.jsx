import axiosInstance from "../apis/axiosInstance"
import { API_END_POINTS } from "../constants/apiEndPoints"

export const getproducts = async () =>{
    return await axiosInstance.get(API_END_POINTS.ALL_PRODUCTS)
}