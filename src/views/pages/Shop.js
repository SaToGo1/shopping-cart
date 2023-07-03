import './Shop.css'
import ShopCard from '../components/ShopCard'
import useProducts from '../../hooks/useProducts'

const Shop = ({ addToCart, isCartVisible }) => {
    const { products } = useProducts()

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