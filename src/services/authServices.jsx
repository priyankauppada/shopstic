// authentication related API calls
//signup, signin, forgot password

import axiosInstance from "../apis/axiosInstance"
import { API_END_POINTS } from "../constants/apiEndPoints"

export const signupApi = async (data) =>{
    return await axiosInstance.post(API_END_POINTS.SIGNUP, data)
}

export const signinApi = async (data) =>{
    return await axiosInstance.post(API_END_POINTS.SIGNIN, data)
}

export const checkuser = async () =>{
    return await axiosInstance.get(API_END_POINTS.USERS)
}
export const updateuser=async(data)=>{
    return await axiosInstance.put(API_END_POINTS.UPDATE_USER, data)
}
