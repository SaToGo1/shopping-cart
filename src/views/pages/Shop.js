import './Shop.css'
import ShopCard from '../components/ShopCard'
import useProducts from '../../hooks/useProducts'
import useCart from '../../hooks/useCart'
import useCategories from '../../hooks/useCategories';
import useFilters from '../../hooks/useFilters';
import debounce from '../../utils/debounce';
import { useState } from 'react';

const Shop = ({ products }) => {
    const { isCartVisible } = useCart()
    const { categories } = useCategories(products);
    const { filters, filteredProducts, setCategory, setMinPrice, setMaxPrice } = useFilters(products);

    const handleChange = (event) => {
        setCategory(event.target.value);
    }

    const handleMinPrice = debounce((event) => {
        setMinPrice(event.target.value);
    }, 500)

    const handleMaxPrice = debounce((event) => {
        setMaxPrice(event.target.value);
    }, 500)

    return (
        <main className={'shop ' + (isCartVisible ? 'shop-cartOpen' : ' ')}>
            <div className='shop-filters'>
                    <select onChange={handleChange}>
                        {
                            categories.map((category, i) => <option key={i} value={category}>{category}</option>)
                        }
                    </select>

                    <div className='filter-min-max-price-div'>
                        <div className='filter-price'>
                            <label htmlFor='price'>$ min</label>
                            <input 
                                type='number'
                                id='price'
                                min='0'
                                max='1000'
                                onInput={handleMinPrice}
                            />
                        </div>

                        <div className='filter-price'>
                            <label htmlFor='price'>$ max</label>
                            <input 
                                type='number'
                                id='price'
                                min='0'
                                max='1000'
                                onInput={handleMaxPrice}
                            />
                        </div>
                    </div>
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