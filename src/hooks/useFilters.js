import { useState, useEffect } from "react"

/**
 * Apply the filters and return the filtered Products
 * @param {Array Obj} products
 * @returns {Obj} with the filtered products and the function setFilter
 */
export default function useFilters(products) {
  // FILTERS
  const [filters, setFilter] = useState({
    category: "all",
    minPrice: 0,
    maxPrice: 0,
    order: 'normal' // normal ASC, DESC
  });
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(()=>{
    const filterProducts = products => {
      return products.filter(product => {
        const minPrice = parseFloat(filters.minPrice);
        const maxPrice = parseFloat(filters.maxPrice);

        return(
          (minPrice <= product.price || isNaN(minPrice)) &&
          (maxPrice === 0 || maxPrice >= product.price || isNaN(maxPrice)) &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
    
    let newProducts
    newProducts = filterProducts(products)
    setFilteredProducts(newProducts)
  }, [filters, products]);

  const setCategory = (category) => {
    setFilter({
      ...filters,
      category: category,
    })
  }

  const setMinPrice = (minPrice) => {
    setFilter({
      ...filters,
      minPrice: minPrice,
    })
  }

  const setMaxPrice = (minPrice) => {
    setFilter({
      ...filters,
      maxPrice: minPrice,
    })
  }

  return { filters, filteredProducts, setCategory, setMinPrice, setMaxPrice };
}
