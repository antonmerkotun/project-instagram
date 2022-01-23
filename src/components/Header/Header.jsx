import React from 'react';

// style
import "./Header.scss"

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <a className="header__logo">
                    <img className="header__logo-img"
                         src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                         alt="header-logo"/>
                </a>
                <div className="header__search">
                    <input className="header__search-input" type="text" placeholder="Поиск"/>
                </div>
                <div className="header__nav">
                    <span>icon</span>
                    <span>icon</span>
                    <span>icon</span>
                    <span>icon</span>
                    <span>icon</span>
                    <span>icon</span>
                </div>
            </div>
        </div>
    );
}

export default Header;