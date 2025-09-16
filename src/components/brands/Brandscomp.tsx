"use client"
import { Brandsmod } from '@/app/types/product.moudle'
import { Eye, Heart, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Brandscomp({brands}: {brands:Brandsmod[]}) {
  return (
    <><div className='flex flex-wrap justify-between  gap-y-8 my-10 '>
 {brands?.map((brand)=>
 
 <div key={brand?._id} className='bg-white relative card-main rounded-3xl p-5 border w-[49%] md:w-[24.5%] border-[#13bfe3]'>
 <div className=' relative w-[100%] h-[100px] md:h-[260px]  rounded-2xl'>
  <Image  priority loading='eager' sizes='(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw' src={brand?.image} fill alt='img' className='object-contain rounded-2xl' />
  <div className='text-center hidden gap-x-2 md:flex   card-hover text-white rounded-t-[40px] px-6 bg-[#13bfe3] absolute bottom-[-12px] left-[50%] translate-x-[-50%]'>
       
          <Link href={`/brands/${brand?._id}`}><Eye /></Link>
  </div>
 </div>
 <div className='px-0 pt-2 mt-3 border-t flex flex-col items-center justify-center border-[#13bfe3]'>
     
  
  <h2 className='text-center mb-2 Asimovian text-[#13bfe3]  text-[24px]'>{brand?.name}</h2>
  <p className='text-[16px] mb-2 Signika text-center'>{brand?.updatedAt.split("").slice(0,4)}</p>
  <Link href={`/brands/${brand?._id}`} className=' bg-[#13bfe3] text-[12px] rounded-xl px-5 w-24 duration-300 hover:bg-transparent border border-[#13bfe3] justify-around     md:py-1 Asimovian cursor-pointer gap-1 flex items-center '>Details<Eye className='w-[16px]'  /></Link>
  
  
  <div className='text-center brand text-white rounded-b-2xl px-1  bg-[#13bfe3] absolute top-0 left-[50%] translate-x-[-50%]'>
          <h3 className='w-22 md:w-32 Asimovian font-medium'>{brand?.name}</h3>
  </div>
 </div>
 
</div>

 
 )}

</div>
    </>
  )
}
