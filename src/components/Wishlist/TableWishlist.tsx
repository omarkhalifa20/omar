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
<Table className='text-center'>
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
    </>
  )
}
