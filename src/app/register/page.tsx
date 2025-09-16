"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function Registerpage() {
  const [errorMessage, setErrorMessage] = useState(null)
  const router = useRouter();
  interface inputs {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phone: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>();
  async function  onSubmit(values: inputs) {
    console.log(values);
    try {
      const response = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" , values )
      if (response?.data?.message === "success") {
        router.push("/login")
        
      }
      setErrorMessage(null)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.message);
        setErrorMessage(error.response?.data.message)
    }
    
  }
 }
  return (
    <>
      <div className="container mx-auto  w-[85%] ">
        <div className=" pt-25 pb-4 flex justify-center items-center ">
          <div className="form-box w-200  ">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <span className="title Asimovian text-[#13bfe3] ">Register</span>
              {errorMessage && <p className="text-red-500 text-[16px]  text-center mb-1">{errorMessage}</p> }
              <span className="subtitle">
                Create a free account with your email.
              </span>
              <div className="">
                <input
                  type="text"
                  className="w-[95%] mb-2 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="Full Name"
                  {...register("name", { required: 'Name Is Required' })}
                />
                {errors.name && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.name.message}</p>}
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
                  placeholder="Password"
                  {...register("password", { required: 'Password Is Required' })}
                />
                {errors.password && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.password.message}</p>}
                <input
                  type="password"
                  className="w-[95%] mb-2 p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="RePassword"
                  {...register("rePassword", { required: 'RePassword Is Required' })}
                />
                {errors.rePassword && <p className="text-red-500 text-[14px] text-start ms-5 mb-1">{errors.rePassword.message}</p>}
                <input
                  type="text"
                  className="w-[95%] p-2 bg-white rounded border border-[#13bfe3]"
                  placeholder="Phone"
                  {...register("phone", { required: 'Phone Is Required' })}
                />
                {errors.phone && <p className="text-red-500 text-[14px] text-start ms-5 mb-1 ">{errors.phone.message}</p>}
              </div>
              <button type="submit">Register</button>
              
            </form>
            <div className="form-section">
              <p>
                Have an account? <Link href="/login">Log in</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
