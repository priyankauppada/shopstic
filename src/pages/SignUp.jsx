import React, { useState } from "react";
import { isEmailValid } from "../Utils/utils";
import { Link,useNavigate } from 'react-router-dom';
import { ERROR_MESSAGES } from "../constants/errorConstants";
import { signupApi } from '../services/authServices'
import { userLoginStatus } from "../Utils/utils";
import Title from "../components/Title";



function SignUp() {
  const [signupData,setSignupData]=useState({username:'', email:'',password:''})
  const [signupErrors,setSignupErrors]=useState({name:false, email:false,password:false})

  const navigate = useNavigate();
  
   let userLoggedIn=userLoginStatus()
   if (userLoggedIn==true){
   
    navigate("/")
   }
  

  const handleSignupBtn = async (e) => {
    console.log(signupData)
    let tempErrorsData={signupErrors}
    let hasErrors=false
    if(signupData.username.length<3){
      tempErrorsData={...tempErrorsData,username:true}
      hasErrors=true
    }else{
      tempErrorsData={...tempErrorsData,username:false}
    }
    if(isEmailValid(signupData.email)==true){
      tempErrorsData={...tempErrorsData,email:false}
    }else{
      tempErrorsData={...tempErrorsData,email:true}
      hasErrors=true
    }
    if(signupData.password.length<6){
      tempErrorsData={...tempErrorsData,password:true}
      hasErrors=true
    }else{
      tempErrorsData={...tempErrorsData,password:false}
    }
    setSignupErrors({...tempErrorsData})
     if(hasErrors==false){
       try {
        //const res = await axios.post("https://dummyjson.com/users/add", signupData);
        //console.log(res)
        //setResponse(res.data);
        let res= await signupApi({...signupData})
        console.log(res)
        if (res.statusText="Created"){
          localStorage.setItem("userData", JSON.stringify(res.data));
          localStorage.setItem("trackingId",1)
          window.location='/'
        } 
        
      } catch (error) {
        console.error("Error while creating user:", error);
      } 
    } 
      
    
  }
  return (
    
      
  
    <div className=" h-[100vh] flex justify-center items-center p-4 ">
      <div className="bg-white p-5  rounded-md" >
      
      <h2 className="text-center "> <Title text1={"Signup"} text2={""}/> </h2>
      <div className="m-5 text-sm">
        <input className="border border-slate-400 rounded-md p-3  w-80" placeholder="Username"  
              onChange={e=>setSignupData({...signupData,username:e.target.value})}/> 
        <p className='text-red-600 mt-1'>{signupErrors.username==true && ERROR_MESSAGES.SIGNUP.NAME}</p>
      </div>
      <div className="m-5 text-sm">
        <input className="border border-slate-400 rounded-md p-3  w-80"  placeholder="Email"  
            onChange={e=>setSignupData({...signupData,email:e.target.value})} />
        <p className='text-red-600 mt-1'>{signupErrors.email==true && ERROR_MESSAGES.SIGNUP.EMAIL}</p>
      </div>
      <div className="m-5 text-sm  ">
        <input type='password' className="border border-slate-400 rounded-md p-3 w-80" placeholder="Password"  
                onChange={e=>setSignupData({...signupData,password:e.target.value})} />
        <p className='text-red-600 mt-1'>{signupErrors.password==true && ERROR_MESSAGES.SIGNUP.PASSWORD}</p>
      </div>
      <div className='m-5 grid'>
          <button className='bg-[#35ac75] text-white font-semibold py-2 rounded-md text-lg font-sans' onClick={e=>{handleSignupBtn()}}> Signup</button>
      </div>
      <div className="m-5 text-center">
        <span className="signup">Already have an account? <Link className="text-[#35ac75] font-medium" to='/login'>Login</Link> </span>
      </div>
            
        
   
     

      </div>
      
    
     

      
    </div>
  );
}

export default SignUp;
