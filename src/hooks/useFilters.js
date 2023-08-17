import { useState, useEffect } from "react"

/**
 * Apply the filters and return the filtered Products
 * @param {Array Obj} products
 * @returns {Obj} with the filtered products and the function setFilter
 */
export default function useFilters(products) {
  // FILTERS
  const [filter, setFilter] = useState("men's clothing");
  const [filteredProducts, setFilteredProducts] = useState(0);

  // when filter changes, so we actualize filtered products,
  // when products change so if we add products of a specific category
  // we include them.
  useEffect(()=>{
    if(filter === 0 || filter === "all") {
      setFilteredProducts(products);
    } else{
      let newProducts = products.filter(product => filter.includes(product.category));
      setFilteredProducts(newProducts);
    } 
  }, [filter, products]);

  return { filteredProducts, setFilter };
}
