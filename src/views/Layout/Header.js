import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({ handleCartDisplay, isCartVisible }) => {

    return (
        <header className={(isCartVisible? 'header__cart-open' : '')}>
            <section>
                <Link to='/'>
                    <button className='header__button'>
                        <h1 className='header__h1'>Main Page</h1>
                    </button>
                </Link>
            </section>

            <section className='header__ShopDiv'>
                <Link to='/shop'>
                    <button className='header__button'>
                        <p className='header__p'>Shop</p>
                    </button>
                </Link>
            </section>
            <section>
                <button className='header__button' onClick={handleCartDisplay}>
                    <p className='header__p'>Cart</p>
                </button>
            </section>
        </header>
    )
}

export default Header;