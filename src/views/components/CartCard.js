// NOTES:
// Maybe need to change the expand click to the image, so if you click the
// text it does not expand or shrink
// specifically when we add buttons to quantity or delete product from cart.

import { useEffect, useState } from 'react'
import './CartCard.css'
import ButtonShop from './ButtonShop'

export default function CartCard ({ product, augmentQuantity, decreaseQuantity, deleteProduct, calculatePrice, deletePriceProduct }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleQuitClick = () => {
        deletePriceProduct(product)
        deleteProduct(product)
    }

    useEffect(() => {
        calculatePrice()
    }, [product.quantity])

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
                <h3 className='cartCard__title'>{product.title}</h3>
                <p className='cartCard__price'>$ {product.price}</p>
                <div className='cartCard__quantityDiv'>
                    <ButtonShop text={'-'} click={() => {decreaseQuantity(product)}} theme='small' ></ButtonShop>
                    <p>quantity: {product.quantity}</p> 
                    <ButtonShop text={'+'} click={() => {augmentQuantity(product)}} theme='small' ></ButtonShop>
                </div>
                <ButtonShop text={'Quit'} click={handleQuitClick} theme='dark' ></ButtonShop>
            </li>
        </>
    )
}
