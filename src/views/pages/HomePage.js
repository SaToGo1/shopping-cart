import './HomePage.css'

const HomePage = () => {

    return (
        <main className='homePage'>
            <div className='homePage__content'>
                <div>
                    <p>fake</p>
                    <h2 className='homePage__title'>STORE</h2>
                </div>
                <div className='homePage__imgDiv'>
                    <img 
                        className='homePage__img'
                        src='https://i.pinimg.com/originals/22/64/06/2264063a2f83119591d3d8f96af57a1b.jpg'
                        alt='Store entrance, there a little ramp, in front it has a door, by the sides of the door we have two rows of clothing on their, 
                            the ambience is dark.'
                        data-test-id='homeImg'
                        />
                </div>
            </div>
        </main>
    )
}

export default HomePage;