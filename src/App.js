import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENTS
import Header from './views/Layout/Header'
import HomePage from './views/pages/HomePage'
import Shop from './views/pages/Shop'
import Cart from './views/Layout/Cart'

// Custom Hooks
import useCart from './hooks/useCart';
import useProducts from './hooks/useProducts';

function App() {
  const { cart, isCartVisible, handleCartDisplay, addToCart, augmentQuantity, decreaseQuantity } = useCart()
  const { products } = useProducts()

  return (
    <Router>
      <div className="App">
        <Header handleCartDisplay={handleCartDisplay} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop products={products} addToCart={addToCart} />} />
        </Routes>
        <Cart isCartVisible={isCartVisible} handleCartDisplay={handleCartDisplay} cart={cart} augmentQuantity={augmentQuantity} decreaseQuantity={decreaseQuantity} />
      </div>
    </Router>
  );
}

export default App;