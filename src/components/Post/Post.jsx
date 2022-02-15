import React, {useEffect, useState} from 'react';

//style
import "./Post.scss"

//components
import UserAvatar from "../UserAvatar/UserAvatar";
import IconFavorite from "../Icon/IconFavorite/IconFavorite";
import IconMessagePost from "../Icon/IconMessagePost/IconMessagePost";
import IconShare from "../Icon/IconShare/IconShare";
import IconSave from "../Icon/IconSave/IconSave";
import {logDOM} from "@testing-library/react";


const Post = ({nickName, avatar, post, comments, idPost, idUser}) => {

    const [commentsShow, setCommentsShow] = useState(false)
    let lastComments = comments[comments.length - 1]
    console.log(comments)
    const openCommentsAll = () => {
        setCommentsShow(true)
    }

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__header-user ">
                    <div className="post__header-avatar">
                        <UserAvatar avatar={avatar}/>
                    </div>
                    <div>
                        <p className="post__header-name">{nickName}</p>
                    </div>
                </div>
                <div className="post__header-user__burger">
                    <button className="post__header-user__button">
                        <img
                            src="https://img.icons8.com/external-gradak-royyan-wijaya/24/000000/external-anchor-gradak-interface-solidarity-gradak-royyan-wijaya-2.png"
                            alt="content-image"/>
                    </button>
                </div>
            </div>
            <div className="post-content">
                <div className="post-content_block" style={{backgroundImage: `url(${post})`}}/>
            </div>
            <div className="footer">
                <div className="footer__communication">
                    <div>
                        <button className="footer__communication-button">
                            <IconFavorite className="footer-icon"/></button>
                        <button className="footer__communication-button">
                            <IconMessagePost className="footer-icon"/>
                        </button>
                        <button className="footer__communication-button">
                            <IconShare className="footer-icon"/>
                        </button>
                    </div>
                    <div>
                        <button className="footer__communication-button">
                            <IconSave className="footer-icon"/>
                        </button>
                    </div>
                </div>
                <div className="footer-favorite">
                    {idPost} отметок "Нравится"
                </div>
                <div className="footer-comment">
                    <div className="footer-comment-all">
                        {commentsShow === false ? <p>lastComments</p> :
                            <div className="footer-comment-all-list">
                                {comments.map((comment) => {
                                    return <div className="footer-comment-all-item" key={comment._id}>{comment.text}</div>
                                })}
                            </div>
                        }
                    </div>
                    {comments.length >= 1 &&
                    commentsShow === false ? <button
                        className="footer-comment-button"
                        onClick={openCommentsAll}>
                        Посмотреть все комментарии {comments.length}
                    </button> : ''}
                </div>
                <div className="footer-comment-add">
                    <input className="footer-comment-add-input" type="text" placeholder="Добавьте комментарий"/>
                    <button className="footer-comment-add-button">Опубликовать</button>
                </div>
            </div>
        </div>
    );
};

export default Post;