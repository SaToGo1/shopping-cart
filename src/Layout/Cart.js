import CartCard from '../components/CartCard';
import ButtonShop from '../components/ButtonShop';
import './Cart.css'

const Cart = ({ isCartVisible, handleCart, cart }) => {
    return (
        <>
            {isCartVisible === true && 
                <section className="cart">
                    <div className='cart__container'>
                        <h2 className='cart__sectionTitle'>Your Cart</h2>
                        <ul>
                            { cart && 
                                cart.map((product) => (
                                    <CartCard product={product} key={product.id}/>
                                ))
                                
                            }
                        </ul>
                        <div>
                            <ButtonShop 
                                click={handleCart}
                                text="Close" 
                            />
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Cart;