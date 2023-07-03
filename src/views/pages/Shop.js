import './Shop.css'
import ShopCard from '../components/ShopCard'
import useProducts from '../../hooks/useProducts'
import useCart from '../../hooks/useCart'

const Shop = () => {
    const { products } = useProducts()
    const {isCartVisible } = useCart()

    return (
        <main className={'shop ' + (isCartVisible ? 'shop-cartOpen' : ' ')}>
            {
                products.map(product => {
                    return (
                        <ShopCard product={product} key={product.id} />
                    )
                })
            }
        </main>
    )
}

export default Shop;