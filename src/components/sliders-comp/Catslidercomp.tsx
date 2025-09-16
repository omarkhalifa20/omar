"use client"
import { Categories } from '@/app/types/category.moudle'
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination , Autoplay } from 'swiper/modules';
import Image from 'next/image';


export default function Catslidercomp({category} : {category : Categories[]}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <>
    <motion.div   
       ref={ref}
        initial={{ opacity: 0, scale: 0.8  }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 , ease: "easeIn"  }}
        
         className='container mx-auto w-[90%]  '>
         
    
     <Swiper
        
        
        autoplay={{
          delay: 60000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {        
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {       
            slidesPerView: 4,
            spaceBetween: 32.5,
          },
        }}
        modules={[Pagination , Autoplay ]}
        className="mySwiper "
      >
        {
          category?.map((cat)=>
          
          
            <SwiperSlide className='py-1'  key={cat?._id} >
              <div className="card w-36">
              <span></span><span></span><span></span><span></span>
              <div className='par'>
                <div  className='relative w-36 h-50 md:w-full md:h-[320px] '>
              <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={cat?.image} fill alt='img' className='object-cover rounded-[5%]' />
              </div>
              <div className='text-center brand bg-[#ffffffdd] rounded-t-md md:rounded-t-2xl px-1 py-[1px] md:py-1 border border-s-[#13bfe3] border-e-[#13bfe3] border-t-[#13bfe3] absolute bottom-0 left-[50%] translate-x-[-50%]'>
                 <h3 className='w-22 text-[11px] md:text-[16px]  md:w-32 Asimovian font-medium'>{cat?.name}</h3>
              </div>
              <div className='text-center brand bg-[#13bfe3] rounded-2xl px-1 py-1 rotate-[-40deg]  absolute top-[-2px] left-[-20px]'>
                 <h3 className='w-15 Asimovian text-[11px] text-white'>{cat?.updatedAt.split("").slice(0,4)}</h3>
              </div>
              </div>
              
              </div>
              
              
         </SwiperSlide>
          
          
          )
        }
        
        
      </Swiper>
      </motion.div>
    </>
  )
}
