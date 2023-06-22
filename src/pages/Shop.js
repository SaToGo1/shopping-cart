import './Shop.css'
import ShopCard from '../components/ShopCard'

const Shop = ({ products }) => {

    return (
        <main className="shop">
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