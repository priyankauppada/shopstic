export const isEmailValid=(email)=>{
    //let emailRegex= /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test( email);
}

export const userLoginStatus=()=>{
    let userData=localStorage.getItem("userData")
    if (userData == undefined){
        return false
    }else{
        return true
    }

  
}