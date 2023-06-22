import './styles/Header.css'
import { Link } from 'react-router-dom'

const Header = ({ handleCart }) => {

    return (
        <header>
            <div className='header__MainPageDiv'>
                <Link to='/'>
                    <button className='header__button'>
                        <h1 className='header__h1'>Main Page</h1>
                    </button>
                </Link>
            </div>

            <div className='header__ShopDiv'>
                <Link to='/shop'>
                    <button className='header__button'>
                        <p className='header__p'>Shop</p>
                    </button>
                </Link>
            </div>
            <div className='header__CartDiv'>
                <button className='header__button' onClick={handleCart}>
                    <p className='header__p'>Cart</p>
                </button>
            </div>
        </header>
    )
}

export default Header;