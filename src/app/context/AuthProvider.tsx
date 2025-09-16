"use client"
import { SessionProvider } from "next-auth/react";
import CartProvider from "./CartContext";
import { Toaster } from "react-hot-toast";
import WishlistProvider from "./WishlistContext";





export function AuthProvider({children}: {children: React.ReactNode}) {
  return<SessionProvider>
    <WishlistProvider>
    <CartProvider>
      {children}
    </CartProvider>
    </WishlistProvider>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
  </SessionProvider>
    

    
  
}