import React from 'react';

// style
import "./Header.scss"

// icon
import {AiFillHome} from "react-icons/ai";
import {RiCompass3Line, RiMessengerLine} from "react-icons/ri";
import {FiPlusSquare} from "react-icons/fi";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {Link} from "react-router-dom";

//components
import UserAvatar from "../UserAvatar/UserAvatar";


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
                    <div className="header__nav-icon">
                        <Link className="link" to="/"><AiFillHome className="react-icon"/></Link>
                    </div>
                    <div className="header__nav-icon">
                        <Link className="link" to="/notfound"><RiMessengerLine className="react-icon"/></Link>
                    </div>
                    <div className="header__nav-icon">
                        <Link className="link" to="/notfound"><FiPlusSquare className="react-icon"/></Link>
                    </div>
                    <div className="header__nav-icon">
                        <Link className="link" to="/notfound"><RiCompass3Line className="react-icon"/></Link>
                    </div>
                    <div className="header__nav-icon">
                        <Link className="link" to="/notfound"><MdOutlineFavoriteBorder className="react-icon"/></Link>
                    </div>
                    <div className="header__nav-icon"><Link className="link" to="/user">
                        <UserAvatar
                            avatar={"https://jabko.ua/image/cache/catalog/products/2021/03/231700/IMG_8624-420x420.jpg"}/>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;