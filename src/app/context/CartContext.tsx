import { getUsercart } from "@/actions/cart.action";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

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
    const {data: session} = useSession()
async function getCartDetails() {
    const response = await getUsercart()
    setCartDetails(response?.data)
}

useEffect(() => {
  
    getCartDetails()
  
}, [session])
    return <CartContext.Provider value={{cartDetails , getCartDetails , setCartDetails}}>
        {children}
    </CartContext.Provider>
}


export function useCart() {
    const myContext =  useContext(CartContext)
    return myContext
}