// NOTES:
// Maybe need to change the expand click to the image, so if you click the
// text it does not expand or shrink
// specifically when we add buttons to quantity or delete product from cart.

import { useState } from 'react'
import './CartCard.css'

export default function CartCard ({ product }) {
    const [active, setActive] = useState(false)

    return (
        <>
            {active && (
                <li className='cartCard__li' onClick={() => {setActive(false)}}>
                    <div className='cart__imageDiv-active'>
                        <img 
                            className='cart__image'
                            alt={`product ${product.title}`}
                            src={product.image}
                        />
                    </div>
                    <h3>{product.title}</h3>
                    <p className='cartCard__price'>$ {product.price}</p>
                    <p>quantity: TODO</p> <p>quantity buttons TODO</p>
                    <p>TODO QUIT BUTTON</p>
                </li>
                )
            }

            {!active && (
                <li className='cartCard__li cartCard__li-notActive' onClick={() => {setActive(true)}}>
                    <div className='cart__imageDiv'>
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
            )}
        </>
    )
}
