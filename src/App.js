import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENTS
import Header from './Layout/Header'
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import Cart from './Layout/Cart'

// DATA
import productsData from './mock/data.json'

function useProducts () {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    // fetch('https://fakestoreapi.com/products/')
    //   .then(data => data.json())
    //   .then(productsData => setProducts(productsData))
    setProducts(productsData)
  }, [])

  return { products }
}

function App() {
  // controls if cart is open or closed.
  const [isCartVisible, setIsCartVisible] = useState(false);
  const handleCart = () => {
    setIsCartVisible(!isCartVisible);
  }

  const [cart, setCart] = useState([])

  const { products } = useProducts()

  const addToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart);
  }

  return (
    <Router>
      <div className="App">
        <Header handleCart={handleCart} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop products={products} addToCart={addToCart} />} />
        </Routes>
        <Cart isCartVisible={isCartVisible} handleCart={handleCart} cart={cart} />
      </div>
    </Router>
  );
}

export default App;