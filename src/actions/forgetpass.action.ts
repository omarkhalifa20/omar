"use server"
import getusertoken from "@/lib/Token";
import axios from "axios";


async function forgetpass(email:string ) {
    
    try {
       const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords' ,{email}); 
       console.log(response?.data, "forget");
         return {
          data:response?.data,
          status:response?.status,
          message:response?.data?.message
         }
         
    } catch (error : unknown) {
        if (axios.isAxiosError(error)) {
         return{
            data:[],
            status: error?.response?.status,
            message: error?.response?.data.message || "An error occurred"
        }   
        }
        
    }
}

async function Passcode(resetCode:string ) {
    
    try {
       const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode' ,{resetCode}); 
       console.log(response?.data, "code");
         return {
          data:response?.data,
          status:response?.status,
          message:response?.data?.message
         }
         
    } catch (error : unknown) {
        if (axios.isAxiosError(error)) {
         return{
            data:[],
            status: error?.response?.status,
            message: error?.response?.data.message || "An error occurred"
        }   
        }
        
    }
}

interface Restmoud {
    email: string;
    newPassword: string;
  }
async function RestPass({email, newPassword} : Restmoud ) {
    
    try {
       const response = await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword' ,{email , newPassword }); 
       console.log(response?.data, "code");
         return {
          data:response?.data,
          status:response?.status,
          message:response?.data?.message
         }
         
    } catch (error : unknown) {
        if (axios.isAxiosError(error)) {
         return{
            data:[],
            status: error?.response?.status,
            message: error?.response?.data.message || "An error occurred"
        }   
        }
        
    }
}





export {forgetpass ,Passcode , RestPass }