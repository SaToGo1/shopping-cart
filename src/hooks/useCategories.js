import { useState, useEffect } from "react"

/**
 * Saves an unique instance of all the categories in all the products.
 * To use in the UI to select the category.
 * @param {Array Obj} products 
 * @returns {Array str} name of all the categories in the products.
 */
export default function useCategories(products) {
  // ALL CATEGORIES
  const [categories, setCategories] = useState(() => {
    let initializeCategories = new Set();

    initializeCategories.add('all');
    products.map(product => initializeCategories.add(product.category));
    
    return Array.from(initializeCategories);
  });

  useEffect(() => {
    let initializeCategories = new Set();

    initializeCategories.add('all');
    products.map(product => initializeCategories.add(product.category));

    setCategories(Array.from(initializeCategories));
  }, [products]);

  return { categories };
}