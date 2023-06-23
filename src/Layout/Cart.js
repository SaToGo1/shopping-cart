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
                                    <li className='cart__product-li'>
                                        <div className='cart__image-div'>
                                            <img 
                                                className='cart__image'
                                                alt={`product ${product.title}`}
                                                src={product.image}
                                            />
                                        </div>
                                        <h3>{product.title}</h3>
                                        <p>$ {product.price}</p>
                                        <p>quantity: TODO</p>
                                    </li>
                                ))
                                
                            }
                        </ul>
                        <div>
                            <button onClick={handleCart}>Close</button>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Cart;