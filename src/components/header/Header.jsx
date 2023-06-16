import './header.scss';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <div className='header__logo logo'>
                <Link to='/'><img className='logo__img' src='/images/logo.jpg' alt='logo' /></Link>
            </div>

            <nav className='header__navigation navigation'>
                <ul className='navigation__list'>
                    <li className='navigation__list__elem elem-home'><Link className='navigation-link navigation-link-home' to="/">Home</Link></li>
                    <li className='navigation__list__elem elem-cards'><Link className='navigation-link navigation-link-cards' to="/game">Cards</Link></li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;