import { getBrands } from '@/actions/products.action';
import Brandscomp from '@/components/brands/Brandscomp';
import React from 'react'

export default async function brandspage() {
    const response = await getBrands();
    
    
  return (
    <>
    <div className='container mx-auto   w-[85%] '>
    <h2 className='text-center relative pt-[80px] text-head font-medium Asimovian text-[#13bfe3] text-[30px] mb-4  uppercase'>Our Brands</h2>
      <Brandscomp brands={response?.data}/>  
    </div>
     
    </>
  )
}
