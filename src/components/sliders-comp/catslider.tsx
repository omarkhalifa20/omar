
import { getCat } from '@/actions/categories.action'


import React from 'react'
import Catslidercomp from './Catslidercomp';

export default async function Catslider() {
    const response = await getCat()
   
  return (
    <>
    <div className='container mx-auto  w-[95%] '>
    <div className='my-5 pt-4 pb-5 rounded-3xl bg-[#efefef] '>
      <h2 className='text-center relative text-head font-medium Asimovian text-[#13bfe3] text-[30px] mb-4 uppercase'>Category</h2>
      <Catslidercomp category={response?.data}/>
    </div>
    </div>
   
    
    </>
  )
}
