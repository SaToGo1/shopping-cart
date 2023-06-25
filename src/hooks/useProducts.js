import { useState, useEffect } from 'react'

// DATA
import productsData from '../mock/data.json'

export default function useProducts () {
    const [products, setProducts] = useState([])
  
    const mapProductData = (productData) => {
        const productDataMapped = productData.map(product => ({
            title: product.title,
            price: product.price,
            image: product.image,
            description: product.description
        }))
        return productDataMapped
    }

    useEffect(()=>{
      // fetch('https://fakestoreapi.com/products/')
      //   .then(data => data.json())
      //   .then(productsData => setProducts(productsData))

      let productsDataMapped = mapProductData(productsData)
      setProducts(productsDataMapped)
    }, [])
  
    return { products }
}