//imports
import React from 'react';
import PropTypes from "prop-types";
import Main from "../Main/Main";

//components
import "./NotFound.scss"

const NotFound = ({titlePage}) => {
    return (
        <div className="not-found">
            <p className="not-found-text">{titlePage} page not found</p>
        </div>
    );
};

NotFound.protoType = {
    titlePage: PropTypes.string,
}

export default NotFound;