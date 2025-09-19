import React from 'react'
import logo1 from '../../../public/logo.webp'
export default function Footermain() {
  return (
    <>
    
    <footer className="footer  text-center border border-t-[#13bfe3] footer-horizontal footer-center bg-gray-200 text-primary-content p-5">
  <aside className='flex flex-row justify-around sm:flex-col  md:flex-col items-center'>
    <div>
      <img className='w-15 md:w-20 mb-4' src={logo1.src} alt="" />
    </div>
  <div>
     <p className="font-bold">
      Omarike.
      <br />
      E-Commerce App 2025
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </div>
   
  </aside>
  <nav>
   
  </nav>
</footer>
    </>
  )
}
