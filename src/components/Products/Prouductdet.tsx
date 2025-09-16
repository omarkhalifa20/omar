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
export default function Prouductdetcomp({product}: {product: ProductDet}) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <>
    <div className='container mx-auto pb-20   w-[90%] '>
        <div className=' flex border-2 p-4 border-[#13bfe3] rounded-3xl prod-de justify-between items-center'>
            <div className='w-[49%] '>
            <Swiper 
       
        spaceBetween={19}
       
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2  "
      >
        {product?.images.map((img: string) => (
          <SwiperSlide key={product?._id}>
            <div  className='relative w-[100%] h-[400px]    '>
            
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
            <div className='relative  w-[100px] h-[100px]    '>
            
                  <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={img} fill alt='img' className='object-cover ' />
          </div>
          </SwiperSlide>
        ))}
       

      </Swiper>
            </div>
            <div className='w-[49%] '>
                <h2 className=' Asimovian text-[#13bfe3] text-[40px] mb-4  uppercase'>{product?.title}</h2>
                <p className='text-[16px] mb-2 Signika '>{product?.description}</p>
                <p className='text-[24px] text-[#13bfe3] Signika mb-4 '>{product?.price} EGP</p>
                <p className='text-[14px] mb-2 Signika '>Category: {product?.category?.name}</p>
                <p className='text-[14px] mb-2 Signika '>Quantity: {product?.quantity}</p>
                <p className='text-[14px] mb-2 Signika '>Brand: {product?.brand?.name}</p>
                <div className='flex '>
                <button className='bg-[#13bfe3] duration-400 border hover:border flex hover:text-[#13bfe3] me-4 hover:border-[#13bfe3] hover:bg-transparent  text-white px-6 py-2 rounded-3xl mt-4 Asimovian'><ShoppingBag className='me-2' /> Add to Cart</button>
                <button className='bg-[#13bfe3] duration-400 border hover:border flex hover:text-[#13bfe3] hover:border-[#13bfe3] hover:bg-transparent  text-white px-6 py-2 rounded-3xl mt-4 Asimovian'><Heart className='me-2' /> Add to WishList</button>
                </div>
                </div>
        </div>
    </div>
    </>
  )
}
