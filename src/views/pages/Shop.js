import './Shop.css'
import ShopCard from '../components/ShopCard'
import useProducts from '../../hooks/useProducts'
import useCart from '../../hooks/useCart'
import useCategories from '../../hooks/useCategories';
import useFilters from '../../hooks/useFilters';

const Shop = ({ products }) => {
    const { isCartVisible } = useCart()
    const { categories } = useCategories(products);
    const { filteredProducts, setCategory } = useFilters(products);
    /**
     * TODO: 
     * [x] add a input to select the different categories and show the filtered Products
     *      instead of the products!
     * [x] add two divs, the first to show the form, and the second to show all the ShopCards.
     * 
     * [ ] Also after doing this remember to add another filter for the price in useFilters
     */

    const handleChange = (event) => {
        setCategory(event.target.value);
    }

    return (
        <main className={'shop ' + (isCartVisible ? 'shop-cartOpen' : ' ')}>
            <div className='shop-filters'>
                <select onChange={handleChange}>
                    {
                        categories.map((category, i) => <option key={i} value={category}>{category}</option>)
                    }
                </select>
            </div>
            <div className='shop-content'>
                {
                    filteredProducts.map(product => {
                        return (
                            <ShopCard product={product} key={product.id} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Shop;