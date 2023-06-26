import './Shop.css'
import ShopCard from '../components/ShopCard'

const Shop = ({ products, addToCart, isCartVisible }) => {

    return (
        <main className={'shop ' + (isCartVisible ? 'shop-cartOpen' : ' ')}>
            {
                products.map(product => {
                    return (
                        <ShopCard product={product} key={product.id} addToCart={addToCart} />
                    )
                })
            }
        </main>
    )
}

export default Shop;