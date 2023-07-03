import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// COMPONENTS
import Header from './views/Layout/Header'
import HomePage from './views/pages/HomePage'
import Shop from './views/pages/Shop'
import Cart from './views/Layout/Cart'
import { CartProvider } from './context/cartContext';

function App() {

  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
          <Cart />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;