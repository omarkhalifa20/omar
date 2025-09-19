"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs  } from 'swiper/modules'
import { ProductDet, Productsmod } from '@/app/types/product.moudle';
import Image from 'next/image';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { AddUsercart } from '@/actions/cart.action';
import toast from 'react-hot-toast';
import { AddUserWishlist } from '@/actions/wishlist.action';
import { useSession } from 'next-auth/react';
export default function Prouductdetcomp({product}: {product: ProductDet}) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const session = useSession()
   
    
    const {getCartDetails} =useCart()
const {getWishlistDetails} =useWishlist()


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

  return (
    <>
    <div className='container mx-auto pb-20 w-[100%]  md:w-[90%] '>
        <div className=' flex flex-col  md:flex-row border-2 p-4 border-[#13bfe3] rounded-3xl prod-de justify-between items-center'>
            <div className='w-[100%] md:w-[49%] '>
            <Swiper 
       
        spaceBetween={19}
       
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="md:mySwiper2   "
      >
        {product?.images.map((img: string) => (
          <SwiperSlide key={product?._id}>
            <div  className='relative w-[100%] h-[250px] md:h-[400px]    '>
            
                  <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={img} fill alt='img' className='object-cover ' />
          </div>
          </SwiperSlide>
        ))}
      
      </Swiper>
      <Swiper
         onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {product?.images.map((img: string) => (
          <SwiperSlide key={product?._id} className=' '>
            <div className='relative w-[50px] h-[50px]  md:w-[100px] md:h-[100px]    '>
            
                  <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={img} fill alt='img' className='object-cover ' />
          </div>
          </SwiperSlide>
        ))}
       

      </Swiper>
            </div>
            <div className='md:w-[49%] '>
                <h2 className=' Asimovian text-[#13bfe3] text-center md:text-start text-[25px] md:text-[40px] mb-4 mt-6 md:mt-0  uppercase'>{product?.title}</h2>
                <p className='text-[16px] mb-2 Signika text-center  md:text-start  '>{product?.description}</p>
                <p className='text-[24px] text-center  md:text-start text-[#13bfe3] Signika mb-4 '>{product?.price} EGP</p>
                <div className='bg-gray-100 md:border-none border border-[#13bfe3] md:bg-transparent md:rounded-none md:p-0 p-2 rounded-lg'>
                 <p className='text-[14px] mb-2 Signika md:text-start text-center '><span className='hidden md:inline-block  '>Category:</span> {product?.category?.name}</p>
                <div className='flex    flex-row md:flex-col md:justify-start justify-around  '>
                <p className='text-[14px] mb-2 Signika '>Quantity: {product?.quantity}</p>
                <p className='text-[14px] mb-2 Signika '>Brand: {product?.brand?.name}</p> 
                </div>
                

                </div>
                
                <div className='flex md:gap-2 flex-col md:flex-row '>
                <button onClick={()=>handleAddToCart(product?.id)} className='bg-[#13bfe3] cursor-pointer duration-400 border hover:border flex justify-center  hover:text-[#13bfe3]  hover:border-[#13bfe3] hover:bg-transparent  text-white px-6 py-2 rounded-3xl mt-4 Asimovian'><ShoppingBag className='me-2' /> Add to Cart</button>
                <button onClick={()=>handleAddToWishlist(product?.id)} className='bg-[#13bfe3] cursor-pointer duration-400 border hover:border flex justify-center hover:text-[#13bfe3] hover:border-[#13bfe3] hover:bg-transparent  text-white px-6 py-2 rounded-3xl mt-4 Asimovian'><Heart className='me-2' /> Add to WishList</button>
                </div>
                </div>
        </div>
    </div>
    </>
  )
}
