import './styles/App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import HomePage from './components/homePage'
import Shop from './components/shop'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;