import { createContext, useState } from "react";

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
