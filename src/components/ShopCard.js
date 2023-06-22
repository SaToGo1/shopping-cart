import './ShopCard.css'

const ShopCard = ({ product }) => {
    const transformTitle = (title) => {
        if (title.length < 60) return title;
        return `${title.slice(0, 60)} ...`;
    }

    console.log(transformTitle(product.title))
    return (
        <div className='shop__card'>
            <div className='shopCard__image-div '>
                <img 
                    className='shopCard__image'
                    alt={`product ${product.title}`}
                    src={product.image}
                />
            </div>
            <h2 className='shopCard__title'>{transformTitle(product.title)}</h2>
            <p className='shopCard__price'>${product.price}</p>
            <div className='shopCard__buttonDiv'>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default ShopCard;