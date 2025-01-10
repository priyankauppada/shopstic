import { signinApi } from "../services/authServices";

export const ERROR_MESSAGES = {
    SIGNUP:{
    NAME: "Min 3 characters",
    EMAIL: "Enter a valid email",
    PASSWORD: "Min 6 characters"
    },
    SIGNIN:{
        USERNAME: "Min 3 characters",
        PASSWORD: "Min 6 characters",
        API_ERROR: "Invalid Credentials"
    },
    RESET_PASSWORD:{
      EMAIL: "Enter a valid email",
      API_ERROR: "Invalid Credentials"
    },
    
}