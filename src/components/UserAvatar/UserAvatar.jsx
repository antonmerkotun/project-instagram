//imports
import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

//style
import "./UserAvatar.scss";

//components
import Header from "../Header/Header";


const UserAvatar = ({avatar = ''}) => {
    return (
            <div className="user__avatar" style={{backgroundImage: `url(${avatar})`}}/>
    );
};

UserAvatar.protoType = {
    avatar: PropTypes.string
}

export default UserAvatar;