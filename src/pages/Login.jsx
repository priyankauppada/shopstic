import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'

import { signinApi } from '../services/authServices'
import { userLoginStatus } from '../Utils/utils'
import { ERROR_MESSAGES } from '../constants/errorConstants'
import Title from '../components/Title'
import { TbEyeStar } from "react-icons/tb";
import { VscEyeClosed } from "react-icons/vsc";


const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginData,setLoginData]=useState({username:"", password:''})
  const [loginErrors,setLoginErrors]=useState({username:false, password:false, apiError:false})
  let navigate=useNavigate()
   let userLoggedIn=userLoginStatus()
   if (userLoggedIn==true){
    window.location='/'
    
   }
  

  const handleLoginBtn = async (e) => {
  
    console.log(loginData)
    let tempErrorsData={loginErrors}
    let hasErrors=false
    if(loginData.username.length<3){
      tempErrorsData={...tempErrorsData,username:true}
      hasErrors=true
    }else{
      tempErrorsData={...tempErrorsData,username:false}
    }
    
    if(loginData.password.length<6){
      tempErrorsData={...tempErrorsData,password:true}
      hasErrors=true
    }else{
      tempErrorsData={...tempErrorsData,password:false}
    }
    setLoginErrors({...tempErrorsData})
     if(hasErrors==false){
       try {
        let res= await signinApi({...loginData})
        console.log(res)
        if (res.statusText="OK"){
          console.log(res)
          setLoginErrors({apiError:false})
          localStorage.setItem("userData", JSON.stringify(res.data));
          localStorage.setItem("token",res.data.accessToken)
         
          localStorage.setItem("trackingId",1)
          window.location='/'
        }  
        
      } catch (error) {
        setLoginErrors({apiError:true})
        console.error("Error while creating user:", error);
      } 
    } 
      
    
  }
  return (
    <div className="h-[100vh] flex justify-center items-center p-4 ">
      <div className="bg-white px-8  rounded-md" >
        <div className='text-center'>
            <Title text1={"Login"} text2={""}/>
        </div>
        
     
      <div className="m-5 text-sm">
        <input className="border border-slate-400 rounded-md p-3  w-80" placeholder="Userame"  
              onChange={e=>setLoginData({...loginData,username:e.target.value})}/> 
        <p className='text-red-600 mt-1'>{loginErrors.username==true && ERROR_MESSAGES.SIGNIN.USERNAME}</p>
      </div>
     
      <div className="m-5 text-sm  relative">
        <input type={isPasswordVisible ? "text" : "password"} 
        className="border border-slate-400 rounded-md p-3 w-80 " placeholder="Password"  
                onChange={e=>setLoginData({...loginData,password:e.target.value})} /> 
        <br/> <button
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            className="absolute top-4 right-5 text-lg text-gray-600 font-semibold"
          > 
            {isPasswordVisible ? <VscEyeClosed /> : <TbEyeStar/>}
          </button> 
         <p className='mt-2'> <Link className="text-[#35ac75] font-medium " to='/reset-password'>Forgot password? </Link></p>
        <p className='text-red-600 mt-1'>{loginErrors.password==true && ERROR_MESSAGES.SIGNIN.PASSWORD}</p>

      </div>
      <div className='m-5 grid'>
          <button className='bg-[#35ac75] text-white font-semibold py-2 rounded-md text-lg font-sans' onClick={e=>{handleLoginBtn()}}> Login</button>
          <p className='text-red-600 mt-2 text-center'>{loginErrors.apiError==true && ERROR_MESSAGES.SIGNIN.API_ERROR}</p>
      </div>
      <div className="m-5 text-center">
        <span className="signup">Don't have an account? 
            <Link className="text-[#35ac75] font-medium" to='/signup'> Signup</Link> </span>
      </div>
        
   
     

      </div>
      
    
     

      
    </div>
  )
}

export default Login