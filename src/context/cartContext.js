import { createContext, useState } from "react";

// make the cart data global, so we can see 
// the cart in any point of the page
export const CartContext = createContext();

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);
    const [isCartVisible, setIsCartVisible] = useState(false); 

    const value = {
        cart, setCart,
        isCartVisible, setIsCartVisible
    }
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
