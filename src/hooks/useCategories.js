import { useState, useEffect } from "react"

/**
 * Saves an unique instance of all the categories in all the products.
 * To use in the UI to select the category.
 * @param {Array Obj} products 
 * @returns {Array str} name of all the categories in the products.
 */
export default function useCategories(products) {
  // ALL CATEGORIES
  const [categories, setCategories] = useState(0);

  useEffect(() => {
    let categories = new Set();
    products.map(product => categories.add(product.category));
    setCategories(categories);
  },[products]);

  return { categories };
}