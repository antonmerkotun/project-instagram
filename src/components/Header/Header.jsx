import React from 'react';
import {Link} from "react-router-dom";


// style
import "./Header.scss"

//components
import UserAvatar from "../UserAvatar/UserAvatar";
import IconHome from "../Icon/IconHome/IconHome";
import IconMessage from "../Icon/IconMessage/IconMessage";
import IconNewPost from "../Icon/IconNewPost/IconNewPost";
import IconCompass from "../Icon/IconCompass/IconCompass";
import IconFavorite from "../Icon/IconFavorite/IconFavorite";


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
                        <Link className="link" to="/">
                            <IconHome/>
                        </Link>
                    </div>
                    <div className="header__nav-icon">
                        <Link className="link" to="/notfound">
                            <IconMessage/>
                        </Link>
                    </div>
                    <div className="header__nav-icon">
                        <Link className="link" to="/notfound">
                            <IconNewPost/>
                        </Link>
                    </div>
                    <div className="header__nav-icon">
                        <Link className="link" to="/notfound">
                            <IconCompass/>
                        </Link>
                    </div>
                    <div className="header__nav-icon">
                        <Link className="link" to="/notfound">
                            <IconFavorite/>
                        </Link>
                    </div>
                    <div className="header__nav-icon">
                        <Link className="link" to="/user">
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