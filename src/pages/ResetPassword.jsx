import React, { useState } from 'react'
import { isEmailValid } from '../Utils/utils'
import { ERROR_MESSAGES } from '../constants/errorConstants'
import { checkuser, updateuser } from '../services/authServices'
import Title from '../components/Title'

const ResetPassword = () => {
  const [email,setEmail]=useState("")
  const [emailErrors, setEmailErrors]=useState({email:false,apiError:false})
  const [successMsg, setSuccessmsg] = useState('');
  const [FailMsg, setFailmsg] = useState('');

 const handleResetPasswordBtn = async (e) => {
    console.log(email)
    let tempErrorsData={emailErrors}
    let hasErrors=false
    
    if(isEmailValid(email)==true){
        tempErrorsData={...tempErrorsData,email:false}
      }else{
        tempErrorsData={...tempErrorsData,email:true}
        hasErrors=true
      }
      setEmailErrors({...tempErrorsData})
      if(hasErrors==false){
        try {
            let res= await checkuser()
            console.log(res)
            const user = res.data.users.find((user) => user.email === email);


            if (!user) {
                setFailmsg('Email is not registered with us');
                setSuccessmsg("")
    
            }else{
                setSuccessmsg('Password reset link has sent to your email')
                setFailmsg("")
            }
            
          } 
          catch (error) {
            console.error("Error  user:", error);
          } 
      }
    
      
    
  }
  return (
    <div className="h-[100vh] flex justify-center items-center p-4 ">
      <div className="bg-white p-5  rounded-md" >
      <h2 className="text-center"> <Title text1={"Reset"} text2={"password"}/>  </h2>
      <div className="m-5 text-sm">
        <input className="border border-slate-400 rounded-md p-3  w-80"  placeholder="Email"  
            onChange={e=>setEmail(e.target.value)} />
        <p className='text-red-600 mt-1'>{emailErrors.email==true && ERROR_MESSAGES.RESET_PASSWORD.EMAIL}</p>
      </div>
     
      
      <div className='m-5 grid'>
          <button className='bg-[#35ac75] text-white font-semibold py-2 rounded-md text-lg font-sans' 
          onClick={e=>handleResetPasswordBtn()}> Reset my password</button>
          {/*<p className='text-red-600 mt-2 text-center'>{loginErrors.apiError==true && ERROR_MESSAGES.SIGNIN.API_ERROR}</p> */}
          {emailErrors.email ==false && (<div><p className='text-green-600 mt-1 text-center'>{successMsg }</p>
            <p className='text-red-700 mt-1 text-center'>{FailMsg}</p>
            </div>)}

          
      </div>
      
        
   
     

      </div>
      
    
     

      
    </div>
  )
}

export default ResetPassword