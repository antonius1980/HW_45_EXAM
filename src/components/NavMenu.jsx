import { NavLink, Link } from 'react-router-dom';
const setActive = ({ isActive }) => isActive ? 'nav-menu__link active-link' : 'nav-menu__link';

function NavMenu() {
    return (
            <ul className="nav-menu">
                <li className="nav-menu__item">
                    <NavLink to='/' className={setActive}>Home</NavLink>
                </li>
                <li className="nav-menu__item">
                    <NavLink to='/about' className={setActive}>About Me</NavLink>
                </li>
            </ul>
    )
}

export default NavMenu ;