import axiosInstance from "../apis/axiosInstance"
import { API_END_POINTS } from "../constants/apiEndPoints"

export const searchproduct = async (data) =>{
    return await axiosInstance.get(API_END_POINTS.SEARCH, data)
}


export const singleproduct = async (id) =>{
    const endpoint = API_END_POINTS.SINGLE_PRODUCT.replace('${id}', id);
    return await axiosInstance.get(endpoint);
    //return await axiosInstance.get(API_END_POINTS.SINGLE_PRODUCT, data)
}
export const categories=async()=>{
    return await axiosInstance.get(API_END_POINTS.CATEGORIES)
}
export const categoryproducts = async (categoryname) =>{
    const endpoint = API_END_POINTS.CATEGORY_PRODUCTS.replace('${categoryname}', categoryname);
    return await axiosInstance.get(endpoint);
    
}
