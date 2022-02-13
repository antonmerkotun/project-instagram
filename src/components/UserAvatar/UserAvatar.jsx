import React from 'react';

//style
import "./UserAvatar.scss"
import {Link} from "react-router-dom";

const UserAvatar = ({avatar = '', user}) => {

    return (
        // <Link className="link" to="/user">
            <div className="user__avatar" style={{backgroundImage: `url(${avatar})`}}/>
        // </Link>
    );
};

export default UserAvatar;