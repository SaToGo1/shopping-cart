import './Shop.css'
import ShopCard from '../components/ShopCard'

const Shop = ({ products, addToCart }) => {

    return (
        <main className="shop">
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