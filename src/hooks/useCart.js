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

    const augmentQuantity = (product) => {
        let newCart = [...cart]
        let isContained = cart.some((el, index) => {
            if(product.id === el.id) {
                newCart[index].quantity = newCart[index].quantity + 1;
                return true
            }
            return false
        })
        if (isContained) {
            setCart(newCart)
            return ;
        }
        else {
            throw new Error('Augmented a product that is not in the cart')
        }
    }

    const decreaseQuantity = (product) => {
        let newCart = [...cart]
        let isContained = cart.some((el, index) => {
            if(product.id === el.id) {
                if( el.quantity === 1) return false;

                newCart[index].quantity = newCart[index].quantity - 1;
                return true
            }
            return false
        })
        if (isContained) {
            setCart(newCart)
            return ;
        }
    }
    
    return { cart, isCartVisible, handleCartDisplay, addToCart, augmentQuantity, decreaseQuantity }
  }