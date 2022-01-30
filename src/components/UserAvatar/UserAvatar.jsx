import React from 'react';

//style
import "./UserAvatar.scss"

const UserAvatar = ({avatar = ''}) => {
    return (
        <div className="user__avatar" style={{backgroundImage: `url(${avatar})`}}/>
    );
};

export default UserAvatar;