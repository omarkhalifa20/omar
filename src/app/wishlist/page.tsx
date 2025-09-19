import TableWishlist from '@/components/Wishlist/TableWishlist'
import React from 'react'

export default function Wichlistpage() {

  return (
    <>
    <div className='container mx-auto pt-25   w-[85%] '>
      
        <h2 className='text-center relative text-head font-medium Asimovian text-[#13bfe3] text-[30px] mb-4 uppercase'>Your Wishlist</h2>
        <div className='min-h-[58.7vh] md:min-h-[51vh]'>
           <TableWishlist/>
        </div>
        
        </div>
    </>
  )
}
