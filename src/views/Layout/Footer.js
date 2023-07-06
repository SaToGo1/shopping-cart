import './Footer.css'
import ghicon from '../assets/github-mark.svg'

export default function Footer () {
    return (
        <footer>
            <a href="https://github.com/SaToGo1">
                <img style={{width: '30px'}} src={ghicon} alt='github icon' />
                <p>SaToGo1</p>
            </a>
        </footer>
    )
}
