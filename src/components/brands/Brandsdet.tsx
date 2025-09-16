"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs  } from 'swiper/modules'
import { Brandsmod} from '@/app/types/product.moudle';
import Image from 'next/image';
import { Heart, ShoppingBag } from 'lucide-react';
export default function Brandsdetcomp({brand}: {brand: Brandsmod}) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <>
    <div className='container mx-auto pb-20   w-[90%] '>
        <div className=' flex border-2 p-4 border-[#13bfe3] rounded-3xl prod-de justify-between items-center'>
            <div className='w-[49%] flex  justify-center items-center'>
         
       <div className='relative w-[75%] h-[400px]    '>
        <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={brand?.image} fill alt='img' className='object-contain rounded-2xl' />
       </div>

  
            </div>
            <div className='w-[49%] flex flex-col justify-center items-center'> 
                <h2 className=' Asimovian text-[#13bfe3] text-[40px] mb-2  uppercase'>{brand?.name}</h2>
                <p className='text-[16px] mb-10 Signika '>{brand?.updatedAt.split("").slice(0,4)}</p>
                
                
                <button className='bg-[#13bfe3] duration-400 border hover:border flex hover:text-[#13bfe3] hover:border-[#13bfe3] hover:bg-transparent  text-white px-6 py-2 rounded-3xl mt-4 Asimovian'><Heart className='me-2' /> Add to WishList</button>
                
                </div>
        </div>
    </div>
    </>
  )
}
