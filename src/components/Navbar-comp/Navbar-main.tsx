"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import logo1 from '../../../public/logo.webp'
import { motion } from "framer-motion"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    NavigationMenu,
  
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
   
  } from "@/components/ui/navigation-menu"
  import {
    Sheet,
    SheetClose,
    SheetContent,
    
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { CircleUserRound, Heart, Menu, ShoppingCart, UserRound } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { Badge } from '../ui/badge'
import { useCart } from '@/app/context/CartContext'
import { useWishlist } from '@/app/context/WishlistContext'
import { usePathname } from 'next/navigation'

export default function Navbarmain() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/cart", label: "Cart" },
    { href: "/category", label: "Categories" },
    { href: "/brands", label: "Brands" },
  ];
  const session = useSession()
  useEffect(() => {
   if (session?.data?.user) {
     

   }
 }, [session]);
  
  
  const {cartDetails} = useCart()
  
  const {wishlistDetails} = useWishlist()
  ;
  
  return (
    
    <>
    <motion.div 
     className='container z-50 fixed top-[-1] right-0 left-0 mx-auto w-[85%]'
     initial={{ y: -100 ,opacity: 0.5 }}
     animate={{ y: 0 , opacity: 1 }}
     transition={{ duration: 1 , ease: "easeIn"  }}>
      <NavigationMenu className='bg-gray-50 px-4 md:px-10 py-2 border-e border-s rounded-b-3xl  md:rounded-b-4xl border-b border-[#13bfe3]  max-w-7xl flex  justify-between'>
  <NavigationMenuList>
    <NavigationMenuItem>
       <Link href="/"><img className='w-15 md:w-20' src={logo1.src} alt="" /></Link>
    </NavigationMenuItem>
  </NavigationMenuList>

  <div className='hidden list-none   md:flex'>
    
    {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <NavigationMenuItem key={link.href} >
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "text-[#13bfe3]  px-3 font-medium Signika" : "px-3 font-medium Signika"}
          >
            {link.label}
          </Link>
          </NavigationMenuItem>
        );
      })}
    
  
  </div>
 
  
  <NavigationMenuList className='flex items-center gap-2'>
    <NavigationMenuItem className='relative   p-1'>
        <Link href="/cart" className=' cursor-pointer '><ShoppingCart className='w-[20px] md:w-[32px]'  /></Link>
        <Badge className='bg-[#13bfe3] absolute text-[9px] md:text-[12px] end-[-10px] top-[-4px] rounded-full  md:end-[-11px] md:top-[-8px]' variant="default">{cartDetails?.products?.length ? cartDetails?.products?.length : 0 }</Badge>
    </NavigationMenuItem>
    <NavigationMenuItem className='relative  p-1 '>
       <Link href='/wishlist' className='cursor-pointer '><Heart className='w-[20px] md:w-[32px]' /></Link>
       <Badge className='bg-[#13bfe3] text-[9px] md:text-[12px] absolute rounded-full end-[-10px] top-[-4px]  z-3 md:end-[-11px] md:top-[-8px]' variant="default">{wishlistDetails?.length ? wishlistDetails?.length : 0 }</Badge>
    </NavigationMenuItem>

    <Popover>
  <PopoverTrigger className=' cursor-pointer hover:bg-gray-200 p-1 rounded-md'><UserRound className='w-[20px] md:w-[32px]' /></PopoverTrigger>
  <PopoverContent className='p-2 w-52 md:w-57 mt-1'> {session.data?
        <>
        <div className='flex flex-col z-50 mb-2 p-2 rounded-lg border border-[#13bfe3] bg-[#13c0e341] items-center'>
        <CircleUserRound className='mb-2' />
        <p className='text-[12px] md:text-[16px]'>{session?.data.user?.email}</p>
        </div>
        <Link href='/' onClick={()=>signOut({callbackUrl:"/login"})} className='Signika px-19 md:px-20 text-[12px] md:text-[16px] py-[5px] bg-transparent  border border-[#13bfe3] hover:bg-[#13c0e341] duration-400 rounded-lg'>LogOut</Link>
        </>
        :<>
         <NavigationMenuLink href='/register' className='Signika bg-transparent mb-2 text-center  border border-[#13bfe3] hover:bg-[#13c0e341] duration-400 rounded-lg'>Register</NavigationMenuLink>
        <NavigationMenuLink href='/login' className='Signika bg-transparent  border text-center border-[#13bfe3] hover:bg-[#13c0e341] duration-400 rounded-lg' >LogIn</NavigationMenuLink>
        </>}</PopoverContent>
</Popover>
 



  </NavigationMenuList>

  <div className='flex md:hidden '>
  <Sheet>
  <SheetTrigger className=' cursor-pointer '><Menu /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='text-center mb-5 '>Menu</SheetTitle>
      <ul className=' list-none items-center flex flex-col gap-10 text-[#13bfe3]'>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <NavigationMenuItem key={link.href} className='w-[100%]' >
            <SheetClose asChild>
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "w-[100%] block  text-center py-2 rounded-md border bg-[#13bfe3] border-[#13bfe3] hover:bg-[#13bfe3] text-black hover:text-black duration-300 font-medium Signika" : "   py-2 w-[100%] block  text-center rounded-md border text-black border-[#13bfe3] hover:bg-[#13bfe3] hover:text-black duration-300 font-medium Signika"}
          >
            {link.label}
          </Link>
          </SheetClose>
          </NavigationMenuItem>
        );
      })}
      
    <div className='flex gap-4 mt-10'>
    <NavigationMenuItem className='relative   p-1'>
        <Link href="/cart" className=' cursor-pointer '><ShoppingCart  /></Link>
        <Badge className='bg-[#13bfe3] absolute rounded-full end-[-11px] top-[-8px]' variant="default">{cartDetails?.products?.length ? cartDetails?.products?.length : 0 }</Badge>
    </NavigationMenuItem>
    <Popover>
  <PopoverTrigger className=' cursor-pointer hover:bg-gray-200 p-1 rounded-md'><UserRound /></PopoverTrigger>
  <PopoverContent className='p-2 w-52 md:w-57 mt-1'> {session.data?
        <>
        <div className='flex flex-col z-50 mb-2 p-2 rounded-lg border border-[#13bfe3] bg-[#13c0e341] items-center'>
        <CircleUserRound className='mb-2' />
        <p className='text-[12px] md:text-[16px]'>{session?.data.user?.email}</p>
        </div>
        <Link href='/' onClick={()=>signOut({callbackUrl:"/login"})} className='Signika px-19 md:px-20 text-[12px] md:text-[16px] py-[5px] bg-transparent  border border-[#13bfe3] hover:bg-[#13c0e341] duration-400 rounded-lg'>LogOut</Link>
        </>
        :<>
         <NavigationMenuLink href='/register' className='Signika bg-transparent mb-2 text-center  border border-[#13bfe3] hover:bg-[#13c0e341] duration-400 rounded-lg'>Register</NavigationMenuLink>
        <NavigationMenuLink href='/login' className='Signika bg-transparent  border text-center border-[#13bfe3] hover:bg-[#13c0e341] duration-400 rounded-lg' >LogIn</NavigationMenuLink>
        </>}</PopoverContent>
</Popover>
    <NavigationMenuItem className='relative  p-1 '>
       <Link href='/wishlist' className='cursor-pointer '><Heart /></Link>
       <Badge className='bg-[#13bfe3] absolute rounded-full  z-3 end-[-11px] top-[-8px]' variant="default">{wishlistDetails?.length ? wishlistDetails?.length : 0 }</Badge>
    </NavigationMenuItem>

    </div>
      </ul>

    </SheetHeader>
  </SheetContent>
</Sheet>
 </div>

</NavigationMenu>  
    </motion.div>
    
    </>
  )
}
