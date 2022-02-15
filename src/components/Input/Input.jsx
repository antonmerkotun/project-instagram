import React from 'react';

const Input = ({idUser,idPost}) => {

    const sendingData = (e) => {
        console.log(e.target.id)
    }

    const inputChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="footer-comment-add">
            <input className="footer-comment-add-input" type="text" placeholder="Добавьте комментарий" onChange={inputChange}/>
            <button className="footer-comment-add-button" id={idPost} onClick={sendingData}>Опубликовать</button>
        </div>
    );
};

export default Input;