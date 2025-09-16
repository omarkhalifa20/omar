"use client"
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Image from 'next/image'
import { getUsercart, Removefromcart, Updatecartquantity } from '@/actions/cart.action';
import { useCart } from '@/app/context/CartContext';
import { CircleX } from 'lucide-react';
import toast from 'react-hot-toast';
import Link from 'next/link';
export default function TableCart() {
    
    const {cartDetails , getCartDetails } = useCart()
  console.log(cartDetails?.products);
  
    async function handleupdatecount(productId:string , count:number){
      const response = await Updatecartquantity(productId , count)
        console.log(response);
       await getCartDetails()
    }
    async function handleRemoveprod(productId:string ){
      const response = await Removefromcart(productId)
        console.log(response);
        toast.success('Successfully Deleted From Cart!')
       await getCartDetails()
    }
    
  return (
    <>
<Table className='text-center '>
  <TableCaption className='pb-10'>A list of your recent invoices.</TableCaption>
  <TableHeader className='bg-[#13c0e3a2] '>
    <TableRow  >
      <TableHead className="w-[100px] ps-11 text-center Signika text-[18px]">Proudcts</TableHead>
      <TableHead className='text-center Signika text-[18px]'>Price</TableHead>
      <TableHead className='text-center Signika text-[18px]'>Quantity</TableHead>
      <TableHead className="text-right Signika text-[18px] pe-10">SubTotal</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody >
    {cartDetails?.products.map((item)=>
    <TableRow key={item?._id}>
      
      <TableCell className="font-medium flex justify-center items-center ">
      <button onClick={()=>handleRemoveprod(item?.product?._id)}  className='pe-5 cursor-pointer'><CircleX className='text-[#13c0e3] ' /></button>
        <div  className='relative w-[60px] h-[60px] '>
         <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={item?.product?.imageCover} fill alt='img' className='object-cover rounded-[5%]' />
        </div>
        
      </TableCell>
      <TableCell className='text-[16px] Signika'>{item?.price}</TableCell>
      <TableCell >
        <div className='flex justify-center items-center   gap-2'>
        <button onClick={()=>handleupdatecount(item?.product?._id,item?.count+1)} className='bg-[#13c0e3] border hover:bg-transparent hover:border-[#13c0e3]  duration-150 px-2 py-1 rounded-lg text-[16.5px]'>+</button>
        <p className='text-[16px] Signika'>{item?.count}</p>
        <button onClick={()=>handleupdatecount(item?.product?._id,item?.count-1)} className='bg-[#13c0e3]  border hover:bg-transparent hover:border-[#13c0e3]  duration-150 px-[10px] py-1 rounded-lg text-[18px]'>-</button>
        </div>
        
      </TableCell>
      <TableCell className="text-right text-[16px] Signika pe-13">{item?.price*item?.count}</TableCell>
    </TableRow>
    
    )}
    
  </TableBody>
  <TableFooter>
    <TableRow>
    
      <TableCell className='Signika text-[18px] '>Total Price</TableCell>
      <TableCell className=' text-[18px] Signika'>{cartDetails?.totalCartPrice}</TableCell>
      <TableCell />
      <TableCell className="text-right text-[16px] Signika"><Link href="/checkout" className='px-3 py-2 me-3 rounded-2xl bg-[#13c0e3]'>CheckOut</Link></TableCell>
    </TableRow>
  </TableFooter>
</Table>
    </>
  )
}
