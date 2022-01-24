import React from 'react';
// style
import "./Header.scss"
// icon
import {AiFillHome} from "react-icons/ai";
import {RiCompass3Line, RiMessengerLine} from "react-icons/ri";
import {FiCircle, FiPlusSquare} from "react-icons/fi";
import {GrFavorite} from "react-icons/gr";
//

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
                    <span><AiFillHome className="header__nav-icon"/></span>
                    <span><RiMessengerLine className="header__nav-icon"/></span>
                    <span><FiPlusSquare className="header__nav-icon"/></span>
                    <span><RiCompass3Line className="header__nav-icon"/></span>
                    <span><GrFavorite className="header__nav-icon"/></span>
                    <span><FiCircle className="header__nav-icon"/></span>
                </div>
            </div>
        </div>
    );
}

export default Header;