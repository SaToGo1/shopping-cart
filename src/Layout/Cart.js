import './Cart.css'

const Cart = ({ isCartVisible, handleCart, cart }) => {
    return (
        <>
            {isCartVisible === true && 
                <main className="cart">
                    <div className='cart__container'>
                        <div className='cart__title-div'>
                            <h2 className='cart__title'>Your Shopping Cart</h2>
                        </div>
                        <ul>
                            { cart && 
                                cart.map((product) => (
                                    <li>{product.title}</li>
                                ))
                                
                            }
                        </ul>
                        <div>
                            <button onClick={handleCart}>Close</button>
                        </div>
                    </div>
                </main>
            }
        </>
    )
}

export default Cart;