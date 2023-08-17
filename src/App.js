import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENTS
import Header from './views/Layout/Header'
import HomePage from './views/pages/HomePage'
import Shop from './views/pages/Shop'
import Cart from './views/Layout/Cart'
import Footer from './views/Layout/Footer';

// CONTEXT
import { CartProvider } from './context/cartContext';

// HOOKS
import useProducts from './hooks/useProducts';

// this is only to make gh pages work with 
// the router 
import PATH from './views/constants';
import { useEffect, useState } from 'react';

function App() {
  const { products } = useProducts();

  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path={PATH} element={<HomePage />} />
            <Route path={PATH + 'shop'} element={<Shop products={products} />} />
          </Routes>
          <Cart />
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;