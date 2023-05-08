import '../styles/Header.css'

const Header = () => {

    return (
        <header>
            <div className='header__MainPageDiv'>
                <button className='header__button'>
                    <h1 className='header__h1'>Main Page</h1>
                </button>
            </div>

            <div className='header__ShopDiv'>
                <button className='header__button'>
                    <p className='header__p'>Shop</p>
                </button>
            </div>
            <div className='header__CartDiv'>
                <button className='header__button'>
                    <p className='header__p'>Cart</p>
                </button>
            </div>
        </header>
    )
}

export default Header;