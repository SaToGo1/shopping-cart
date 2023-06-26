// NOTES:
// Maybe need to change the expand click to the image, so if you click the
// text it does not expand or shrink
// specifically when we add buttons to quantity or delete product from cart.

import { useState } from 'react'
import './CartCard.css'

export default function CartCard ({ product, augmentQuantity, decreaseQuantity }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
            <li className='cartCard__li'>
                <div className={isExpanded? 'cart__imageDiv-active' : 'cart__imageDiv'}>
                    <img 
                        className='cart__image'
                        alt={`${product.description}`}
                        src={product.image}
                        onClick={() => {setIsExpanded(!isExpanded)}}
                    />
                </div>
                <h3>{product.title}</h3>
                <p className='cartCard__price'>$ {product.price}</p>
                <div className='cartCard__quantityDiv'>
                    <button className='cartCard__quantityButton' onClick={() => {decreaseQuantity(product)}}>-</button> 
                    <p>quantity: {product.quantity}</p> 
                    <button className='cartCard__quantityButton' onClick={() => {augmentQuantity(product)}}>+</button>
                </div>
                <p>TODO QUIT BUTTON</p>
            </li>
        </>
    )
}
