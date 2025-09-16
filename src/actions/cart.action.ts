"use server"
import getusertoken from "@/lib/Token";
import axios from "axios";


async function getUsercart() {
    const token = await getusertoken()
    try {
       const response = await axios.get("https://ecommerce.routemisr.com/api/v1/cart" ,{
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

async function AddUsercart(productId:string) {
    const token = await getusertoken()
    try {
       const response = await axios.post("https://ecommerce.routemisr.com/api/v1/cart" , {productId},{
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

async function Updatecartquantity(productId:string , count:number) {
    const token = await getusertoken()
    try {
       const response = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {count},{
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

async function Removefromcart(productId:string) {
    const token = await getusertoken()
    try {
       const response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,{
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




export {getUsercart , AddUsercart , Updatecartquantity , Removefromcart }