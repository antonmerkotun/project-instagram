//imports
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";

//components
import {postCommentsAction} from "../../redux/ajax/comments/postComments/postCommentsAction";
import {getCommentsAction} from "../../redux/ajax/comments/getComments/getCommentsAction";
import Post from "../Post/Post";


const Input = ({idUser, idPost, comments}) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const commentsData = useSelector(state => state.getComments)

    const addComment = (e) => {
        e.preventDefault()
        if (value === '') {
            console.log("Введите комментарий")
        } else {
            dispatch(postCommentsAction(idUser, idPost, value))
            dispatch(getCommentsAction())
        }
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

Input.protoType = {
    idUser: PropTypes.string,
    idPost: PropTypes.string,
    comments: PropTypes.object,
}

export default Input;