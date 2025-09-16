"use server"
import axios from "axios";

async function getProducts() {

    try {
       const response = await axios.get("https://ecommerce.routemisr.com/api/v1/products"); 
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

async function getProductsdet(id:string) {

    try {
       const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`); 
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

async function getBrands() {

    try {
       const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`); 
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

async function getBrandsdet(id:string) {

    try {
       const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`); 
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



export {getProducts , getProductsdet , getBrands , getBrandsdet}