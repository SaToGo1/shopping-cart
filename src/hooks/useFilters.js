import { useState, useEffect } from "react"

/**
 * Apply the filters and return the filtered Products
 * @param {Array Obj} products
 * @returns {Obj} with the filtered products and the function setFilter
 */
export default function useFilters(products) {
  // FILTERS
  const [filter, setFilter] = useState({
    category: "all",
  });
  const [filteredProducts, setFilteredProducts] = useState(products);

  // when filter changes, so we actualize filtered products,
  // when products change so if we add products of a specific category
  // we include them.
  useEffect(()=>{
    if(filter.category === 0 || filter.category === "all") {
      setFilteredProducts(products);
    } else{
      let newProducts = products.filter(product => filter.category === product.category);
      setFilteredProducts(newProducts);
    } 
  }, [filter, products]);

  const setCategory = (category) => {
    setFilter({
      ...filter,
      category: category,
    })
  }

  return { filteredProducts, setCategory };
}
