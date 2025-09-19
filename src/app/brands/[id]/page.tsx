import { getBrandsdet } from '@/actions/products.action';
import Brandsdetcomp from '@/components/brands/Brandsdet';
import React from 'react'

export default  async function BrandDet({params}: {params : {id:string}}) {
const {id} = await params;
  
  

    const response = await getBrandsdet(id);
    
  return (
    <>
    <div className='container mx-auto   w-[85%] '>
        <h2 className='text-center relative pt-[80px] text-head font-medium Asimovian text-[#13bfe3] text-[30px] mb-4  uppercase'>Brand Details</h2>
        <Brandsdetcomp brand={response?.data}/>
    </div>
    
    </>
  )
}
