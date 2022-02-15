import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {postCommentsAction} from "../../redux/ajax/comments/postComments/postCommentsAction";


const Input = ({idUser, idPost}) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()


    const addComment = (e) => {
        dispatch(postCommentsAction(idUser, idPost, value))
        // e.preventDefault()
        setValue('')
    }

    return (
        <form className="footer-comment-add" onSubmit={addComment}>
            <input className="footer-comment-add-input" placeholder="Добавьте комментарий" value={value}
                   onChange={event => setValue(event.target.value)}/>
            <button className="footer-comment-add-button" id={idPost} type="submit">Опубликовать</button>
        </form>
    );
};

export default Input;