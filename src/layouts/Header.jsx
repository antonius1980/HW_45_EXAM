import websiteLogo from '../assets/img/logo.svg'

import HamburgerToggle from '../components/HamburgerToggle';
import NavMenu from '../components/NavMenu';
import SocialMedia from '../components/SocialMedia';

function Header() {
    return (
        <header className="header top-header">
            <div className="container top-header__container">
                <div className="top-header__block logo-block">
                    <a href="./" className="logo-block__link">
                        <img className="logo logo-block__img" src={websiteLogo} alt="Logo image"/>
                    </a>
                </div>
                <nav className="nav top-header__block top-header__nav">
                    <HamburgerToggle />
                    <NavMenu />
                </nav>
                <div className="top-header__block top-header-socials">
                    <SocialMedia />
                </div>
            </div>
        </header>
    )
}

export default Header ;