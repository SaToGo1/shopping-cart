import useCart from '../../hooks/useCart'
import './Header.css'
import { Link } from 'react-router-dom'

// this is only to make gh pages work with 
// the router 
import PATH from '../constants'

const Header = () => {
    const {isCartVisible, handleCartDisplay} = useCart()

    return (
        <header className={(isCartVisible? 'header__cart-open' : '')}>
            <section>
                <Link to={PATH}>
                    <button className='header__button'>
                        <h1 className='header__h1'>Main Page</h1>
                    </button>
                </Link>
            </section>

            <section className='header__ShopDiv'>
                <Link to={PATH + 'shop'}>
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