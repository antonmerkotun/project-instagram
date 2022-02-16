import React from 'react';
import "./NotFound.scss"

const NotFound = ({titlePage}) => {
    return (
        <div className="not-found">
            <p className="not-found-text">{titlePage} page not found</p>
        </div>
    );
};

export default NotFound;