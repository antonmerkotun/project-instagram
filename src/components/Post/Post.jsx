import React, {useEffect, useState} from 'react';

//style
import "./Post.scss"

//components
import UserAvatar from "../UserAvatar/UserAvatar";
import IconFavorite from "../Icon/IconFavorite/IconFavorite";
import IconMessagePost from "../Icon/IconMessagePost/IconMessagePost";
import IconShare from "../Icon/IconShare/IconShare";
import IconSave from "../Icon/IconSave/IconSave";


const Post = ({avatar, nickName, post, favoriteNumber, comments}) => {
    const [commentsShow, setCommentsShow] = useState(false)

    let lastComments = comments[comments.length - 1]


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
                    {favoriteNumber} отметок "Нравится"
                </div>
                <div className="footer-comment">
                    <div className="footer-comment-all">
                        {commentsShow === false ? lastComments :
                            <div className="footer-comment-all-list">
                                {comments.map((el) => {
                                    return <div className="footer-comment-all-item" key={el}>{el}</div>
                                })}
                            </div>}
                    </div>
                    {comments.length >= 1 &&
                    commentsShow === false ? <button
                        className="footer-comment-button"
                        onClick={openCommentsAll}>
                        Посмотреть все комментарии ({comments.length})
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