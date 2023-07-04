import './Shop.css'
import ShopCard from '../components/ShopCard'
import useProducts from '../../hooks/useProducts'
import useCart from '../../hooks/useCart'

const Shop = ({ products }) => {
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