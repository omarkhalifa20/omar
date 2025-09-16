import { getProducts } from '@/actions/products.action';
import ProductsComp from '@/components/Products/ProductsComp'
import React from 'react'

export default async function Products() {
    const response = await getProducts();
    console.log(response?.data);
  return (
    <>
    <div className='container mx-auto   w-[85%] '>
    <h2 className='text-center relative pt-[80px] text-head font-medium Asimovian text-[#13bfe3] text-[30px] mb-4  uppercase'>Our Products</h2>
    <ProductsComp products={response?.data}/>
    </div>
    
    </>
  )
}
