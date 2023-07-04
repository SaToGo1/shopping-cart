import { useState, useEffect } from 'react'

// MOCK DATA
// import productsData from '../mock/data.json'

export default function useProducts () {
    const [products, setProducts] = useState([])
  
    const mapProductData = (productData) => {
        const productDataMapped = productData.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            description: product.description
        }))
        return productDataMapped
    }

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products/')
        .then(data => data.json())
        .then(productsData => {
            let productsDataMapped = mapProductData(productsData)
            setProducts(productsDataMapped)
        })

    //   MOCK DATA
    // let productsDataMapped = mapProductData(productsData)
    // setProducts(productsDataMapped)
    }, [])
  
    return { products }
}