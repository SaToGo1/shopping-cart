import { useState, useEffect } from 'react'

// DATA
import productsData from '../mock/data.json'

export default function useProducts () {
    const [products, setProducts] = useState([])
  
    useEffect(()=>{
      // fetch('https://fakestoreapi.com/products/')
      //   .then(data => data.json())
      //   .then(productsData => setProducts(productsData))
      setProducts(productsData)
    }, [])
  
    return { products }
}