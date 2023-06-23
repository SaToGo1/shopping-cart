import { useState } from 'react'
import './CartCard.css'

export default function CartCard ({ product }) {
    const [active, setActive] = useState(false)

    return (
        <>
            {active && (
                <li className='cart__product-li' onClick={() => {setActive(false)}}>
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
                <li className='cart__product-li' onClick={() => {setActive(true)}}>
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
