"use server"
import getusertoken from "@/lib/Token";
import axios from "axios";


async function getUserWishlist() {
    const token = await getusertoken()
    try {
       const response = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist" ,{
        headers:{
            token: token as string
        }
       }); 
         return {
          data:response?.data?.data,
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

async function AddUserWishlist(productId:string) {
    const token = await getusertoken()
    try {
       const response = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist" , {productId},{
        headers:{
            token: token as string
        },
       }); 
       console.log(response.data);
       
         return {
          data:response?.data?.data,
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



async function Removefromwishlist(productId:string) {
    const token = await getusertoken()
    try {
       const response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}` ,{
        headers:{
            token: token as string
        }
       }); 
         return {
          data:response?.data?.data,
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


export {getUserWishlist , AddUserWishlist  , Removefromwishlist}