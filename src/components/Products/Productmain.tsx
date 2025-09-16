import { getProducts } from '@/actions/products.action'
import axios from 'axios'
import React from 'react'
import ProductsComp from './ProductsComp';

export default async function Productmain() {
    const response = await getProducts();
    console.log(response?.data);
  return (
    <>
    <div className='container mx-auto pt-5  w-[85%] '>
        
    <h2 className='text-center relative text-head font-medium Asimovian text-[#13bfe3] text-[30px] mb-4  uppercase'>Our Products</h2>
        <ProductsComp products={response?.data}/>
    </div>
    </>
  )
}
