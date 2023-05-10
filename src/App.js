import './styles/App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header'
import HomePage from './components/homePage'
import Shop from './components/shop'
import Cart from './components/cart'

function App() {
  const [cartStatus, setCartStatus] = useState(false);
  const handleCart = () => {
    setCartStatus(!cartStatus);
  }

  return (
    <Router>
      <div className="App">
        <Header handleCart={handleCart} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
        <Cart cartStatus={cartStatus} handleCart={handleCart} />
      </div>
    </Router>
  );
}

export default App;