"use client"
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import toast from 'react-hot-toast'

import { RestPass } from '@/actions/forgetpass.action'


export default function Updatepasspage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    const restcode = localStorage.getItem("resetCode");
    if (!restcode) {
      router.push("/")   
     }
  }, [router]);
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
    setIsLoading(true)
    const response = await RestPass({email:values.email , newPassword:values.password})
    
    if (response?.data?.token) {
      toast.success("Password Updated !")
      localStorage.removeItem("resetCode")
      router.push("/login")
      setIsLoading(false)
    } else {
      setIsLoading(false)
      toast.error("Password or Email InVaild !")
    }

    
   
 }
  return (
    <>
      <div className="container mx-auto  w-[85%] ">
        <div className=" h-screen flex justify-center items-center ">
          <div className="form-box w-200  ">
            <form onSubmit={handleSubmit(onSubmit)} className="form auth-form">
              <span className="title Asimovian text-[#13bfe3] ">Update Password</span>
            
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
                  placeholder="New Password "
                  {...register("password", { required: 'New Password Is Required' })}
                />
                {errors.password && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.password.message}</p>}
               
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
            <p className='mb-1'>
               <Link href="/login">Back To Login?</Link>
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

