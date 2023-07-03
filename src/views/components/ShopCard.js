import useCart from '../../hooks/useCart';
import ButtonShop from './ButtonShop';
import './ShopCard.css'

const ShopCard = ({ product }) => {
    const { addToCart } = useCart()

    const transformTitle = (title) => {
        if (title.length < 60) return title;
        return `${title.slice(0, 60)} ...`;
    }

    return (
        <div className='shop__card'>
            <div className='shopCard__image-div '>
                <img 
                    className='shopCard__image'
                    alt={`${product.description}`}
                    src={product.image}
                />
            </div>
            <h2 className='shopCard__title'>{transformTitle(product.title)}</h2>
            <p className='shopCard__price'>${product.price}</p>
            <div className='shopCard__button'>
                <ButtonShop 
                    click={() => addToCart(product)}
                    text="Add to cart" 
                />
            </div>
        </div>
    )
}

export default ShopCard;