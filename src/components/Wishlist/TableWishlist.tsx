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

import { CircleX, Eye, ShoppingBag } from 'lucide-react';
import toast from 'react-hot-toast';
import { useWishlist } from '@/app/context/WishlistContext';
import Link from 'next/link';
import { Removefromwishlist } from '@/actions/wishlist.action';
import { AddUsercart } from '@/actions/cart.action';
import { useCart } from '@/app/context/CartContext';
import { WishlistInterface } from '@/app/types/wishlist.moudle';
export default function TableWishlist() {
    const {getCartDetails} =useCart()
  const {wishlistDetails , getWishlistDetails } = useWishlist()
  console.log(wishlistDetails);
   
  async function handleAddToCart(productId : string) {
    const response = await AddUsercart(productId); 
    console.log(response);
    toast.success('Successfully Added To Cart!')
    await getCartDetails()
  }

    async function handleRemoveprod(productId:string ){
      const response = await Removefromwishlist(productId)
        console.log(response);
        toast.success('Successfully Deleted From Wishlist!')
       await getWishlistDetails()
    }
    
  return (
    <>
<Table className='text-center hidden md:inline-table'>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader className='bg-[#13c0e3a2] '>
    <TableRow  >
      <TableHead className="w-[100px] text-[18px] text-center Signika">Proudcts</TableHead>
      <TableHead className='text-center text-[18px] Signika'>Name</TableHead>
      <TableHead className='text-center text-[18px] Signika'>Price</TableHead>
      <TableHead className="text-right text-[18px] Signika ">Details</TableHead>
      <TableHead className="text-right text-[18px] Signika pe-15">Cart</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody >
    {wishlistDetails?.map((item)=>
    <TableRow key={item?._id}>
      
      <TableCell className="font-medium flex justify-center items-center ">
      <button onClick={()=>handleRemoveprod(item?._id)}   className='pe-5 cursor-pointer'><CircleX className='text-[#13c0e3] ' /></button>
        <div  className='relative w-[60px] h-[60px] '>
         <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={item?.imageCover} fill alt='img' className='object-cover rounded-[5%]' />
        </div>
        
      </TableCell>
      <TableCell className='Signika text-[16px]'> {item?.title.split(" ").slice(0,3).join(" ")}</TableCell>
      <TableCell className='Signika text-[16px]' >
      {item?.price}
        
      </TableCell>
      <TableCell className="text-right Signika flex justify-end pe-5 text-[16px] "> <Link href={`/products/${item?._id}`} className='bg-[#13c0e3] rounded-lg cursor-pointer text-white p-1'><Eye  /></Link></TableCell>
      <TableCell className='text-right Signika   text-[16px]' ><div className='flex justify-end'><button onClick={()=>handleAddToCart(item?._id)} className='bg-[#13bfe3] p-2 cursor-pointer duration-400 border hover:border flex  hover:text-[#13bfe3]  hover:border-[#13bfe3] hover:bg-transparent  text-white  rounded-3xl  Asimovian'><ShoppingBag className='me-2' /> Add to Cart</button></div></TableCell>
    </TableRow>
    
    )}
    
  </TableBody>
 
</Table>

<div className='md:hidden pb-7 flex flex-col gap-3'> 
{wishlistDetails?.map((item)=>
<div key={item?._id} className='bg-gray-100 border rounded-lg flex justify-between border-[#13c0e3] p-2'>
<div className='flex items-center justify-center'>
  <button onClick={()=>handleRemoveprod(item?._id)}  className='pe-2 cursor-pointer'><CircleX className='text-[#13c0e3] ' /></button>
        <div  className='relative w-[60px] h-[60px] '>
         <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={item?.imageCover} fill alt='img' className='object-cover rounded-[5%]' />
        </div></div>
        <div className='text-center relative flex   items-center flex-col w-[75%]'>
          <p className='bg-[#13c0e3] absolute top-[-8px]  px-5  rounded-b-xl'>{item?.title.split(" ").slice(0,2).join(" ")}</p>
          <div className='pt-6 pb-2 text-[16px] flex-col flex items-center gap-2 w-[75%] '>
            <div className='flex gap-2 justify-around items-center'>
              <p className=' font-bold'>Price:</p>
            <p className='text-[#13c0e3]'>{item?.price}</p>
            </div>
            <div className='flex justify-end'><button onClick={()=>handleAddToCart(item?._id)} className='bg-[#13bfe3] py-1 px-2 cursor-pointer duration-400 border hover:border flex items-center  hover:text-[#13bfe3]  hover:border-[#13bfe3] hover:bg-transparent  text-white  rounded-3xl text-[12px]  Asimovian'><ShoppingBag className='me-2 w-5' /> Add to Cart</button></div>
            <Link href={`/products/${item?._id}`} className='bg-[#13bfe3] py-1 px-5 cursor-pointer duration-400 border hover:border flex items-center  hover:text-[#13bfe3]  hover:border-[#13bfe3] hover:bg-transparent  text-white  rounded-3xl text-[12px]  Asimovian'><Eye className='me-2 w-5'  /> Details</Link>
        
          </div>
        </div>
        
        
</div>

)}


</div>
    </>
  )
}
