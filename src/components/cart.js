import '../styles/Cart.css'

const Cart = ({ cartStatus, handleCart }) => {
    console.log(cartStatus)

    return (
        <>
            {cartStatus === true && 
                <div className="cart">
                    <p>Hello</p>
                    <button onClick={handleCart}>Close</button>
                </div>
            }
        </>
    )
}

export default Cart;