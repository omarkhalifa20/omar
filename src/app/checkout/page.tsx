"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { CheckoutOnlinePayment, CheckoutPayment } from "@/actions/payment.action";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Checkoutpage() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online" | null>(null)
  const{cartDetails ,setCartDetails , getCartDetails}=useCart();

  const CardId = cartDetails?._id
  const router = useRouter();
  interface inputs {
    details: string;
    phone: string;
    city: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>();
  async function  onSubmit(values: inputs) {
    setisLoading(true)
    console.log(values);
    if (paymentMethod == "cash") {
      try {
      const response = await CheckoutPayment(CardId as string , values )
      console.log(response , "from checkout");
      
      if (response?.data?.status === "success") {
        router.push("/")
        setisLoading(false)
        setCartDetails(null)
        toast.success('Successfully Payment!')
       await getCartDetails()
      }
      setErrorMessage(null)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.message);
        setErrorMessage(error.response?.data.message)
    }
    
  }   
    }else if (paymentMethod == "online") {
        try {
        const response = await CheckoutOnlinePayment(CardId as string , values )
        console.log(response , "from online");
        
        if (response?.data?.status === "success") {
        window.location.href = response?.data?.session?.url
        setisLoading(false)
        }
        setErrorMessage(null)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data.message);
          setErrorMessage(error.response?.data.message)
      }
      
    }   
      }
   
 }
  return (
    <>
      <div className="container mx-auto  w-[85%] ">
        <div className=" pt-25 pb-4 flex justify-center items-center ">
          <div className="form-box w-200 border border-gray-400 ">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <span className="title Asimovian text-[#13bfe3] ">CheckOut Payment</span>
              {errorMessage && <p className="text-red-500 text-[16px]  text-center mb-1">{errorMessage}</p> }
              <span className="subtitle">
              We are happy to have you with us 
              </span>
              <Tabs onValueChange={(val)=>setPaymentMethod(val as "online" | "cash")}  defaultValue="cash" >
              <TabsList  className="mx-auto gap-2 mb-2 bg-transparent ">
             <TabsTrigger className=" bg-transparent border cursor-pointer p-3  border-[#13bfe3] " value="cash">Cash</TabsTrigger>
             <TabsTrigger className=" bg-transparent border cursor-pointer p-3  border-[#13bfe3] " value="online">Online</TabsTrigger>
             </TabsList>
             <TabsContent value="cash">
             <input
                  type="text"
                  className="w-[95%] mb-3 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="Your Details"
                  {...register("details", { required: 'Details Is Required' })}
                />
                {errors.details && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.details.message}</p>}
                <input
                  type="text"
                  className="w-[95%] mb-3 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="Your Phone"
                  {...register("phone", { required: 'Phone Is Required' })}
                />
                {errors.phone && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.phone.message}</p>}
                <input
                  type="text"
                  className="w-[95%] mb-3 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="Your City"
                  {...register("city", { required: 'City Is Required' })}
                />
                {errors.city && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.city.message}</p>}
                
              <button className="w-[100%] flex justify-center mt-4 custom-button" type="submit"> { isLoading ? <div className="loading-wave">
              <div className="loading-bar" />
              <div className="loading-bar" />
               <div className="loading-bar" />
               <div className="loading-bar" />
               </div> : "CheckOut"}</button>


             </TabsContent>
             <TabsContent value="online">

             <input
                  type="text"
                  className="w-[95%] mb-3 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="Your Details"
                  {...register("details", { required: 'Details Is Required' })}
                />
                {errors.details && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.details.message}</p>}
                <input
                  type="text"
                  className="w-[95%] mb-3 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="Your Phone"
                  {...register("phone", { required: 'Phone Is Required' })}
                />
                {errors.phone && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.phone.message}</p>}
                <input
                  type="text"
                  className="w-[95%] mb-3 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="Your City"
                  {...register("city", { required: 'City Is Required' })}
                />
                {errors.city && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.city.message}</p>}
                
                <button className="w-[100%] flex justify-center mt-4 custom-button" type="submit"> { isLoading ? <div className="loading-wave">
              <div className="loading-bar" />
              <div className="loading-bar" />
               <div className="loading-bar" />
               <div className="loading-bar" />
               </div> : "CheckOut"}</button>


             </TabsContent>
               
              </Tabs>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
}
