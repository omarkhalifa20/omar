import { getUsercart } from "@/actions/cart.action";
import { createContext, useContext, useEffect, useState } from "react";
import { set } from "react-hook-form";
interface CartContextType {
    cartDetails: Cartmod | null; 
    getCartDetails:() => Promise<void>;
    setCartDetails: (cart: Cartmod | null) => void;
}

const CartContext = createContext<CartContextType>({
    cartDetails: null,
    getCartDetails: async () => {},
    setCartDetails: () => { }
    
})

export default function CartProvider({children}: {children: React.ReactNode}) {
    const [cartDetails, setCartDetails] = useState<Cartmod | null>(null)
async function getCartDetails() {
    const response = await getUsercart()
    setCartDetails(response?.data)
}

useEffect(() => {
  
    getCartDetails()
  
}, [])
    return <CartContext.Provider value={{cartDetails , getCartDetails , setCartDetails}}>
        {children}
    </CartContext.Provider>
}


export function useCart() {
    const myContext =  useContext(CartContext)
    return myContext
}