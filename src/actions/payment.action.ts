"use server"
import getusertoken from "@/lib/Token";
import axios from "axios";
export interface shippingAddressTypes {

    details: string,
    phone: string,
    city: string
}

async function CheckoutPayment(CartId:string , shippingAddress:shippingAddressTypes) {
    const token = await getusertoken()
    try {
       const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${CartId}` ,{shippingAddress} ,{
        headers:{
            token: token as string
        }
       }); 
       console.log(response?.data, "Cash payment");
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

async function CheckoutOnlinePayment(CartId:string , shippingAddress:shippingAddressTypes) {
    const token = await getusertoken()
    try {
       const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CartId}?url=http://localhost:3000` ,{shippingAddress} ,{
        headers:{
            token: token as string
        }
       }); 
       console.log(response?.data, "online payment");
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






export {CheckoutPayment , CheckoutOnlinePayment }