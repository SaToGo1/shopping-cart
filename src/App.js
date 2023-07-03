import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENTS
import Header from './views/Layout/Header'
import HomePage from './views/pages/HomePage'
import Shop from './views/pages/Shop'
import Cart from './views/Layout/Cart'

// Custom Hooks
import useCart from './hooks/useCart';

function App() {
  const { cart, isCartVisible, handleCartDisplay, addToCart, augmentQuantity, decreaseQuantity, deleteProduct } = useCart()

  return (
    <Router>
      <div className="App">
        <Header handleCartDisplay={handleCartDisplay} isCartVisible={isCartVisible} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop addToCart={addToCart} isCartVisible={isCartVisible} />} />
        </Routes>
        <Cart 
          isCartVisible={isCartVisible} 
          handleCartDisplay={handleCartDisplay} 
          cart={cart} 
          augmentQuantity={augmentQuantity} 
          decreaseQuantity={decreaseQuantity}
          deleteProduct={deleteProduct} 
        />
      </div>
    </Router>
  );
}

export default App;