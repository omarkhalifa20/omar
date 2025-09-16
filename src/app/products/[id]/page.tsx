
import { getProductsdet } from '@/actions/products.action';
import Prouductdetcomp from '@/components/Products/Prouductdet';
import axios from 'axios';
import React, { use } from 'react'

export default  async function ProductDet({params}: {params : {id:string}}) {
const {id} = await params;
  
    console.log(id);

    const response = await getProductsdet(id);
    console.log(response?.data);
  return (
    <>
    <div className='container mx-auto   w-[85%] '>
        <h2 className='text-center relative pt-[80px] text-head font-medium Asimovian text-[#13bfe3] text-[30px] mb-4  uppercase'>Product Details</h2>
         <Prouductdetcomp product={response?.data}/>
    </div>
    
    </>
  )
}
