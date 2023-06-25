import { useState } from "react";

export default function useCart () {
    const [cart, setCart] = useState([])
    const [isCartVisible, setIsCartVisible] = useState(false); 
  
    const handleCartDisplay = () => {
        setIsCartVisible(!isCartVisible);
    }
  
    const addToCart = (product) => {
        
        let newCart = [...cart]
        let isDuplicated = cart.some((el, index) => {
            if(product.id === el.id) {
                newCart[index].quantity = newCart[index].quantity + 1;
                return true
            }
            return false
        })
        if (isDuplicated) {
            setCart(newCart)
            return ;
        }

        const newCartProduct = {
            ...product,
            quantity: 1,
        }
        newCart = [...cart, newCartProduct]
        setCart(newCart);
    }
    
    return { cart, isCartVisible, handleCartDisplay, addToCart}
  }