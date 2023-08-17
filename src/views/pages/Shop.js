import './Shop.css'
import ShopCard from '../components/ShopCard'
import useProducts from '../../hooks/useProducts'
import useCart from '../../hooks/useCart'
import useCategories from '../../hooks/useCategories';
import useFilters from '../../hooks/useFilters';

const Shop = ({ products }) => {
    const {isCartVisible } = useCart()
    const { categories } = useCategories(products);
    const { filteredProducts, setFilter } = useFilters(products);

    /**
     * TODO: add a input to select the different categories and show the filtered Products
     * instead of the products!
     * add two divs, the first to show the form, and the second to show all the ShopCards.
     * 
     * Also after doing this remember to add another filter for the price in useFilters
     */
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