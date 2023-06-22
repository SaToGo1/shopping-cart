import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header'
import HomePage from './components/HomePage'
import Shop from './components/Shop'
import Cart from './components/Cart'

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
  const [cartStatus, setCartStatus] = useState(false);
  const handleCart = () => {
    setCartStatus(!cartStatus);
  }

  const { products } = useProducts() 

  return (
    <Router>
      <div className="App">
        <Header handleCart={handleCart} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop products = {products} />} />
        </Routes>
        <Cart cartStatus={cartStatus} handleCart={handleCart} />
      </div>
    </Router>
  );
}

export default App;