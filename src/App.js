import './styles/App.css';
import { BrowserRoutes as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import HomePage from './components/homePage'
import Shop from './components/shop'

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Shop />
    </div>
  );
}

export default App;



const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/shop' element={ <Shop /> } />
      </Routes>
    </Router>
  )
}