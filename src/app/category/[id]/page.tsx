
import { getCatdet } from '@/actions/categories.action';
import Catdetcomp from '@/components/catcomp/CatdetComp';



import React from 'react'

export default  async function BrandDet({params}: {params : {id:string}}) {
const {id} = await params;
  
    

    const response = await getCatdet(id);
    
  return (
    <>
    <div className='container mx-auto   w-[85%] '>
        <h2 className='text-center relative pt-[80px] text-head font-medium Asimovian text-[#13bfe3] text-[30px] mb-4  uppercase'>Category Details</h2>
        <Catdetcomp category={response?.data}/>
    </div>
    
    </>
  )
}
