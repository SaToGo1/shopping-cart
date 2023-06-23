import './ButtonShop.css'

export default function ButtonShop ({ click, text }) {
    return (
        <button className='ButtonShop__button' onClick={click}>{text}</button>
    )
}