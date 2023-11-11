import CartCard from '../components/CartCard';
import ButtonShop from '../components/ButtonShop';
import './Cart.css'
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import useCart from '../../hooks/useCart';

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const { cart, isCartVisible, handleCartDisplay } = useCart()

    // Cart Transition
    useEffect(() => {
        const cartElement = document.querySelector('.cart');
        if(isCartVisible && cartElement) {
            setTimeout(() => {
                cartElement.classList.toggle('cart-transition');
            }, 1)
        } else {
        //     cartElement.classList.toggle('cart-transition-leaving');
        }
    }, [isCartVisible])

    const calculatePrice = () => {
        let price = cart.reduce((sum, el) => sum + (el.price * el.quantity), 0)
        price = price.toFixed(2)
        setTotalPrice(price)
    }

    const deletePriceProduct = (product) => {
        let newPrice = totalPrice;
        newPrice = newPrice - (product.price * product.quantity)
        newPrice = newPrice.toFixed(2)
        setTotalPrice(newPrice)
    }
    

    return (
        <>
            { isCartVisible === true && 
                <section className='cart'>
                    <div className='cart__container'>
                        <h2 className='cart__sectionTitle'>Your Cart</h2>
                        <ul>
                            { cart && 
                                cart.map((product) => (
                                    <CartCard 
                                        product={product} 
                                        key={product.id} 
                                        calculatePrice={calculatePrice}
                                        deletePriceProduct={deletePriceProduct}
                                    />
                                ))
                            }
                        </ul>
                        <hr className='cart__hr' />
                        <div className='cart__totalPrice'>
                            <h3>Total Price:</h3>
                            <p>${totalPrice}</p>
                        </div>
                        <div className='cart__buyDiv'>
                            <ButtonShop 
                                click={() => confetti()}
                                text='Buy' 
                            />
                        </div>
                        <div className='cart__closeDiv'>
                            <ButtonShop 
                                click={handleCartDisplay}
                                text='Close' 
                            />
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Cart;