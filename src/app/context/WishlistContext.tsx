
import { getUserWishlist } from "@/actions/wishlist.action";
import { createContext, useContext, useEffect, useState } from "react";
import { WishlistInterface } from "../types/wishlist.moudle";

interface WishlistContextType {
    wishlistDetails: WishlistInterface[] | null; 
    getWishlistDetails:() => Promise<void>;
}

const WishlistContext = createContext<WishlistContextType>({
    wishlistDetails: null,
    getWishlistDetails: async () => {},
   
    
})

export default function WishlistProvider({children}: {children: React.ReactNode}) {
    const [wishlistDetails, setWishlistDetails] = useState(null)
async function getWishlistDetails() {
    const response = await getUserWishlist()
    setWishlistDetails(response?.data)
}

useEffect(() => {
  
    getWishlistDetails()
  
}, [])
    return <WishlistContext.Provider value={{wishlistDetails , getWishlistDetails}}>
        {children}
    </WishlistContext.Provider>
}


export function useWishlist() {
    const myContext =  useContext(WishlistContext)
    return myContext
}