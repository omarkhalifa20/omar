"use client"
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { sign } from 'crypto'
import { useCart } from '../context/CartContext'
import toast from 'react-hot-toast'
import { useWishlist } from '../context/WishlistContext'


export default function Loginpage() {
  const [isLoading, setIsLoading] = useState(false)
  const {getCartDetails} =useCart()
  const {getWishlistDetails} =useWishlist()
  const searchParams = useSearchParams()
  const router = useRouter();
  interface inputs {
    
    email: string;
    password: string;
   
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>();
  async function  onSubmit(values: inputs) {
    console.log(values , "from login");
    setIsLoading(true)
    try {
      const callbackUrl = searchParams.get("callbackUrl") ?? "/";
      const response = await signIn("credentials" , {redirect:false , email:values.email, password:values.password , callbackUrl })
      if (response?.ok) {
        window.location.assign(response.url ?? callbackUrl )
        await getCartDetails()
        await getWishlistDetails()
        setIsLoading(false)
        toast.success('Successfully LogIn!')
      }else{ 
        
        toast.error('Invalid email or password!')}
        setIsLoading(false)
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    
  }
 }
  return (
    <>
      <div className="container mx-auto  w-[85%] ">
        <div className=" pt-29 pb-4 flex justify-center items-center ">
          <div className="form-box w-200  ">
            <form onSubmit={handleSubmit(onSubmit)} className="form auth-form">
              <span className="title Asimovian text-[#13bfe3] ">LogIn</span>
            
              <span className="subtitle">
                Join us!.
              </span>
              <div className="">
               
                <input
                  type="email"
                  className="w-[95%] mb-2 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="Email"
                  {...register("email", { required: 'Email Is Required' })}
                />
                {errors.email && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.email.message}</p>}
                <input
                  type="password"
                  className="w-[95%] mb-2 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="Password "
                  {...register("password", { required: 'Password Is Required' })}
                />
                {errors.password && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.password.message}</p>}
               
              </div>
              <button className='flex justify-center' type="submit">   
                { isLoading ? <div className="loading-wave">
              <div className="loading-bar" />
              <div className="loading-bar" />
               <div className="loading-bar" />
               <div className="loading-bar" />
               </div> : "LogIn"}
              
  </button>
              
            </form>
            <div className="form-section">
              <p>
                Have an account? <Link href="/register">Register</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

