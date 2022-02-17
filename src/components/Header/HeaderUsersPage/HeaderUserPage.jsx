import React from 'react';
import "./HeaderUserPage.scss"
import UserAvatar from "../../UserAvatar/UserAvatar";

const HeaderUserPage = ({user, posts}) => {
    return (
        <div className="header-user-page">
            <div className="header-user-page_avatar">
                <div className="header-user-page_avatar-image">
                    <UserAvatar avatar={user.avatar}/>
                </div>
            </div>
            <div className="header-user-page_info">
                <div className="header-user-page_info_block">
                    <div className="header-user-page_info_nick-name">{user.name.nickName}</div>
                    <div className="header-user-page_info_button">
                        <button>Подписаться</button>
                    </div>
                </div>
                <div className="header-user-page_info_subscription">
                    <span className="header-user-page_info_subscription_number">{posts.length}</span> публикаций
                </div>
                <div className="header-user-page_info_full-name">{user.name.firstName} {user.name.lastName}</div>
            </div>
        </div>
    );
};

export default HeaderUserPage;