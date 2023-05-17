import '../styles/Cart.css'

const Cart = ({ cartStatus, handleCart }) => {
    console.log(cartStatus)

    return (
        <>
            {cartStatus === true && 
                <div className="cart">
                    <div className='cart__container'>
                        <div className='cart__title__container'>
                            <h2 className='cart__title'>Your Shopping Cart</h2>
                        </div>
                        <div>
                            <button onClick={handleCart}>Close</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart;