import React from 'react';
// style
import "./Header.scss"
// icon
import {AiFillHome} from "react-icons/ai";
import {RiCompass3Line, RiMessengerLine} from "react-icons/ri";
import {FiCircle, FiPlusSquare} from "react-icons/fi";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {Link} from "react-router-dom";
//

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img className="header__logo-img"
                         src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                         alt="header-logo"/>
                </Link>
                <div className="header__search">
                    <input className="header__search-input" type="text" placeholder="Поиск"/>
                </div>
                <div className="header__nav">
                    <Link to="/"><AiFillHome className="header__nav-icon"/></Link>
                    <Link to="/notfound"><RiMessengerLine className="header__nav-icon"/></Link>
                    <Link to="/notfound"><FiPlusSquare className="header__nav-icon"/></Link>
                    <Link to="/notfound"><RiCompass3Line className="header__nav-icon"/></Link>
                    <Link to="/notfound"><MdOutlineFavoriteBorder className="header__nav-icon"/></Link>
                    <Link to="/user"><FiCircle className="header__nav-icon"/></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;