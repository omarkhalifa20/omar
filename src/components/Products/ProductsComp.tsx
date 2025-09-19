"use client"
import { Productsmod } from '@/app/types/product.moudle'
import { StarRating } from 'react-flexible-star-rating';
import Image from 'next/image'
import React, { useRef } from 'react'
import { Eye, Fullscreen, Heart, ShoppingBag, Warehouse } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import { AddUsercart } from '@/actions/cart.action';
import toast from 'react-hot-toast';
import { AddUserWishlist } from '@/actions/wishlist.action';
import { useWishlist } from '@/app/context/WishlistContext';
import { useSession } from 'next-auth/react';
import { WishlistInterface } from '@/app/types/wishlist.moudle';


export default function ProductsComp({products} : {products : Productsmod[]}) {

const session = useSession()
const {getCartDetails} =useCart()
const {wishlistDetails,getWishlistDetails} =useWishlist()
console.log(wishlistDetails);

async function handleAddToCart(productId : string) {
  if (session?.status == "authenticated") {
   const response = await AddUsercart(productId); 
  console.log(response);
  toast.success('Successfully Added To Cart!')
  await getCartDetails() 
  } else {
    toast.error('You Must LogIn First!')
  }
  
}

async function handleAddToWishlist(productId : string) {
  if (session?.status == "authenticated") {
    const response = await AddUserWishlist(productId); 
    console.log(response);
    toast.success('Successfully Added To Wishlist!')
    getWishlistDetails()
   } else {
     toast.error('You Must LogIn First!')
   }
 
}
   
   
const wishlistIds = wishlistDetails?.map((item: WishlistInterface) => item._id) || [];

  
  return (
    <>
    <div className='flex flex-wrap justify-between  gap-y-8 my-10 '>
    {products?.map((prod)=>
    
        <div key={prod?.id} className='bg-white relative card-main rounded-3xl p-2 pt-5 md:p-5 border w-[49%] md:w-[24.5%] border-[#13bfe3]'>
        <div className=' relative w-[100%] h-[160px] md:h-[260px]  rounded-2xl'>
         <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={prod?.imageCover} fill alt='img' className='object-cover rounded-2xl' />
         <div className='text-center hidden md:flex gap-x-2    card-hover text-white rounded-t-[40px] px-6 bg-[#13bfe3] absolute bottom-[-12px] left-[50%] translate-x-[-50%]'>
                 <button onClick={()=>handleAddToCart(prod?.id)} className=' cursor-pointer '><ShoppingBag className='w-[21px]'  /></button>
                 <button onClick={()=>handleAddToWishlist(prod?.id)} className=' cursor-pointer '><Heart   color={wishlistIds.includes(prod._id) ? "red" : "white"}
                fill={wishlistIds.includes(prod._id) ? "red" : "none"} /></button>
                 <Link href={`/products/${prod?.id}`}><Eye /></Link>
         </div>
        </div>
        <div className='px-0 pt-2 mt-3 border-t min-h-[179px] border-[#13bfe3]'>
            <div className='flex mb-3 justify-between items-center'>
              <p className=' text-[12px] md:text-[14px] Signika'>{prod?.category?.name}</p> 
                <p className='text-[12px] hidden md:block md:text-[14px] Signika'>Quantity: {prod?.quantity}</p> 
                <p className='text-[10px] bg-[#13bfe3] px-2  md:hidden  Signika gap-1 rounded-xl flex items-center'><Warehouse className='w-[12px]' /> {prod?.quantity}</p>

            </div>
         
         <h2 className='text-center mb-2 Asimovian text-[#13bfe3] text-[17px] md:text-[24px]'>{prod?.title.split(/[\s-]+/).slice(0,2).join(" ")}</h2>
         <p className=' text-[12px] md:text-[16px] mb-2 Signika text-center'>{prod?.description.split(/[\s-]+/).slice(0,8).join(" ")}</p>
         <p className='text-[17px] md:text-[24px] text-center text-[#13bfe3] Signika '>{prod?.price} EGP</p>
         
         
         <div className='text-center brand text-white rounded-b-2xl px-1  bg-[#13bfe3] absolute top-0 left-[50%] translate-x-[-50%]'>
                 <h3 className=' w-25 md:w-32 text-[12px] md:text-[16px] Asimovian font-medium'>{prod?.brand?.name}</h3>
         </div>
        </div>
        <div className='border-t hidden md:flex justify-center border-[#13bfe3] mt-2'>
           <div className=' flex w-50   mt-2  items-center bg-[#13bfe3] rounded-3xl  '>
         <div className='relative me-9 w-[67px] h-[40px]    '>
         <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={prod?.brand?.image} fill alt='img' className='object-cover rounded-full ' />
        </div>
        <StarRating initialRating={Math.floor(prod?.ratingsAverage)} dimension={5}/>
         </div> 
         </div>

         <div className='border-t flex md:hidden justify-center border-[#13bfe3] mt-2'>
           <div className=' flex  w-50 gap-2  mt-2  justify-around items-center  rounded-3xl  '>
           
           <button onClick={()=>handleAddToCart(prod?.id)} className=' bg-[#13bfe3] text-[10px] rounded-xl px-2 w-24 duration-300 hover:bg-transparent border border-[#13bfe3]    md:py-1 Asimovian cursor-pointer gap-1 flex items-center '>Add To Cart<ShoppingBag className='w-[16px]'  /></button>
           <button onClick={()=>handleAddToWishlist(prod?.id)} className=' rounded-md  py-1 text-[12px] Asimovian cursor-pointer flex items-center '> <Heart className='w-[18px]'   color={wishlistIds.includes(prod._id) ? "red" : "black"}
                fill={wishlistIds.includes(prod._id) ? "red" : "none"} /></button>
            <Link  href={`/products/${prod?.id}`} className=' text-[12px] rounded-md py-1 flex items-center'><Eye className='w-[18px]' /></Link>
         </div> 
         </div>
    </div>
     )}
    </div>
    
   
    </>
  )
}
