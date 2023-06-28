import { useRef } from 'react'
import './ButtonShop.css'

export default function ButtonShop ({ click, text, theme }) {
    const setTheme = (theme) => {
        if (theme === 'dark') return 'ButtonShop__button-dark';
        if (theme === 'small') return 'ButtonShop__button-small';
        return 'ButtonShop__button'
    }
    return (
        <button className={setTheme(theme)} onClick={click}>{text}</button>
    )
}