"use client"
import React, { useState } from 'react'

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Categories } from '@/app/types/category.moudle';
export default function Catdetcomp({category}: {category: Categories}) {
    
  return (
    <>
    <div className='container mx-auto pb-20   w-[90%] '>
        <div className=' flex flex-col md:flex-row border-2 p-4 border-[#13bfe3] rounded-3xl prod-de justify-between items-center'>
            <div className='w-[49%] flex  justify-center items-center'>
         
       <div className='relative w-[75%] h-[200px] md:h-[400px]    '>
        <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={category?.image} fill alt='img' className='object-contain rounded-2xl' />
       </div>

  
            </div>
            <div className='w-[49%] flex flex-col justify-center items-center'> 
                <h2 className=' Asimovian text-[#13bfe3] text-[40px] mb-2  uppercase'>{category?.name}</h2>
                <p className='text-[16px] mb-10 Signika '>{category?.updatedAt.split("").slice(0,4)}</p>
                
                
                
                
                </div>
        </div>
    </div>
    </>
  )
}
