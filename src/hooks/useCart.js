import { useContext } from "react";
import { CartContext } from "../context/cartContext";

/**
 * Saves the items of the cart, and the functionalities of the cart,
 * also saves the visibility status.
 * @returns {Obj} Object with the cart and the different functionalities of the cart.
 */
export default function useCart () {
    const { 
        cart, setCart,
        isCartVisible, setIsCartVisible 
    } = useContext(CartContext)
  
    const handleCartDisplay = () => {
        setIsCartVisible(!isCartVisible);
    }
  
    const addToCart = (product) => {
        
        let newCart = [...cart]
        let isDuplicated = cart.some((el, index) => {
            if(product.id === el.id) {
                newCart[index].quantity = newCart[index].quantity + 1;
                return true;
            }
            return false;
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

    const deleteProduct = (product) => {
        const cartCopy = [...cart]
        let isContained = false;
        
        const newCart = cartCopy.filter((el) => {
            if (el.id === product.id) {
                isContained = true;
                return false;
            }
            return true;
        })

        if (isContained) {
            setCart(newCart)
        }
    }
    
    return { cart, isCartVisible, handleCartDisplay, addToCart, augmentQuantity, decreaseQuantity, deleteProduct }
}