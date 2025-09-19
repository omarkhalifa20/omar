import { getCat } from '@/actions/categories.action';
import CatComp from '@/components/catcomp/CatComp';
import React from 'react'

export default async function categorypage() {
    const response = await getCat()
   
    
  return (
    <>
    <div className='container mx-auto pt-20  w-[85%] '>
    
      <h2 className='text-center relative text-head font-medium Asimovian text-[#13bfe3] text-[30px] mb-4 uppercase'>Our Category</h2>
      <CatComp categories={response?.data}/>
    
    </div>
   
    
    </>
  )
}
