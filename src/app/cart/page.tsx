
import TableCart from '@/components/Cart/TableCart'
import React from 'react'

export default async function cartpage() {
  
    
    
  return (
    <>
    <div className='container mx-auto pt-20  w-[85%] '>
    <h2 className='text-center relative text-head font-medium Asimovian text-[#13bfe3] text-[30px] mb-4 uppercase'>Your Cart</h2>
     <TableCart />
    </div>
    </>
  )
}
