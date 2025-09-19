"use client"
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'



import toast from 'react-hot-toast'

import { Passcode } from '@/actions/forgetpass.action'


export default function Passcodepage() {
  const [isLoading, setIsLoading] = useState(false)
  
  const router = useRouter();
 
  useEffect(() => {
    const email = localStorage.getItem("resetEmail"); 
      if (!email) {
        router.push("/");
      }
    }, [router]);
  interface inputs {
    
    code: string;
    
   
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>();
  async function  onSubmit(values: inputs) {
    
    setIsLoading(true)
    try {
      const response = await Passcode(values.code)
      setIsLoading(false)
     
      if (response?.data?.status == "Success") {
        toast.success("Valid Code !")
        router.push("/updatepass")
        setIsLoading(false)
        localStorage.removeItem("resetEmail"); 
        localStorage.setItem("resetCode", values.code);
      } else {
        toast.error(response?.message)
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
              <span className="title Asimovian text-[#13bfe3] ">Code Sent</span>
            
              <span className="subtitle">
                Type Code !.
              </span>
              <div className="">
               
                <input
                  type="text"
                  className="w-[95%] mb-2 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="code"
                  {...register("code", { required: 'code Is Required' })}
                />
                {errors.code && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.code.message}</p>}
              
               
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
                Back To <Link href="/forgetpass">Forget Password?</Link> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

