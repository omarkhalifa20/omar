"use client"
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'

import { useCart } from '../context/CartContext'
import toast from 'react-hot-toast'
import { useWishlist } from '../context/WishlistContext'
import { forgetpass } from '@/actions/forgetpass.action'


export default function Forgetpasspage() {
  const [isLoading, setIsLoading] = useState(false)
  const {getCartDetails} =useCart()
  const {getWishlistDetails} =useWishlist()
  const searchParams = useSearchParams()
  const router = useRouter();
  interface inputs {
    
    email: string;
    
   
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>();
  async function  onSubmit(values: inputs) {
    
    setIsLoading(true)
    try {
      const response = await forgetpass(values.email)
      console.log(response);
      if (response?.data?.statusMsg == "success") {
      toast.success("Code Sent Succesfully !")
      localStorage.setItem("resetEmail", values.email);
       router.push("/passcode")
       setIsLoading(false) 
      }else{
        toast.error("no user registered with this email address")
        setIsLoading(false)
      }
      
      
      
      
      
    } catch (error) {
      console.log(error);
      
    
  }
 }
  return (
    <>
      <div className="container mx-auto  w-[85%] ">
        <div className=" h-screen flex justify-center items-center ">
          <div className="form-box w-200  ">
            <form onSubmit={handleSubmit(onSubmit)} className="form auth-form">
              <span className="title Asimovian text-[#13bfe3] ">Forget Password</span>
            
              <span className="subtitle">
                Type Your Email !.
              </span>
              <div className="">
               
                <input
                  type="email"
                  className="w-[95%] mb-2 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="Email"
                  {...register("email", { required: 'Email Is Required' })}
                />
                {errors.email && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.email.message}</p>}
              
               
              </div>
              <button className='flex justify-center' type="submit">   
                { isLoading ? <div className="loading-wave">
              <div className="loading-bar" />
              <div className="loading-bar" />
               <div className="loading-bar" />
               <div className="loading-bar" />
               </div> : "Rest"}
              
  </button>
              
            </form>
            <div className="form-section">
              <p>
                Back TO Login? <Link href="/login">Login</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

