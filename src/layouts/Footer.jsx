import { NavLink, Link } from 'react-router-dom';
import websiteLogo from '../assets/img/logo.svg'
import SocialMedia from '../components/SocialMedia';


function Footer() {
    return (
        <footer className="footer bottom-footer">
            <div className="container bottom-footer__container">
                <div className="bottom-footer__block logo-block">
                    <a href="./" className="logo-block__link">
                        <img className="logo logo-block__img" src={websiteLogo} alt="Logo image"/>
                    </a>
                </div>
                <div className="bottom-footer__block bottom-footer__socials">
                    <SocialMedia />
                </div>	
                <div className="bottom-footer__block bottom-footer__copyright">
                    <p>&copy; {new Date().getFullYear()} My website</p>
                </div>	
            </div>
        </footer>
    )
}

export default Footer;