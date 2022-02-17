import React from 'react';
import "./Modal.scss"

function Modal(props) {
    return (
        <div onClick={props.onClick}>
            <div className={"modal"}>

            </div>
        </div>
    );
}

export default Modal;