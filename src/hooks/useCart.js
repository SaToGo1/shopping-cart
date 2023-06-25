import { useState } from "react";

export default function useCart () {
    const [cart, setCart] = useState([])
    const [isCartVisible, setIsCartVisible] = useState(false); 
  
    const handleCartDisplay = () => {
      setIsCartVisible(!isCartVisible);
    }
  
    const addToCart = (product) => {
      const newCartProduct = {
        ...product,
        quantity: 1,
      }
      const newCart = [...cart, product]
      setCart(newCart);
    }
    
    return { cart, isCartVisible, handleCartDisplay, addToCart}
  }