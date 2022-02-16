import React, {useState} from 'react';

//style
import "./Post.scss"

//components
import UserAvatar from "../UserAvatar/UserAvatar";
import IconFavorite from "../Icon/IconFavorite/IconFavorite";
import IconMessagePost from "../Icon/IconMessagePost/IconMessagePost";
import IconShare from "../Icon/IconShare/IconShare";
import IconSave from "../Icon/IconSave/IconSave";
import Input from "../Input/Input";
import IconFavoriteTrue from "../Icon/IconFavorite/IconFavoriteTrue";
import {useDispatch, useSelector} from "react-redux";
import {setFavoriteAction} from "../../redux/ajax/posts/setFavorite/setFavoriteAction";
import {Link} from "react-router-dom";


const Post = ({nickName, avatar, post, comments, idPost, idUser, fav}) => {
    const dispatch = useDispatch()
    const [commentsShow, setCommentsShow] = useState(false)
    const [favorite, setFavorite] = useState(fav)

    let lastComments = comments[comments.length - 1] || {text: "нету комментариев"}

    const openCommentsAll = () => {
        setCommentsShow(true)
    }

    const handleDoubleClick = () => {
        setFavorite(true)
        dispatch(setFavoriteAction(idPost, true))
    }


    const handelDeleteFavorite = () => {
        setFavorite(false)
        dispatch(setFavoriteAction(idPost, false))
    }

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__header-user ">
                    <div className="post__header-avatar">
                        <Link className="link" to={`/user/${idUser}`}>
                        <UserAvatar avatar={avatar}/>
                        </Link>
                    </div>
                    <div>
                        <Link className="link" to={`/user/${idUser}`}>
                        <p className="post__header-name">{nickName}</p>
                        </Link>
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
                <div className="post-content_block" style={{backgroundImage: `url(${post})`}}
                     onDoubleClick={handleDoubleClick}/>
            </div>
            <div className="footer">
                <div className="footer__communication">
                    <div>
                        <button className="footer__communication-button">
                            {favorite === false ? <IconFavorite setFavorite={handleDoubleClick}/> :
                                <IconFavoriteTrue handelDeleteFavorite={handelDeleteFavorite}/>}
                        </button>
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
                </div>
                <div className="footer-comment">
                    <div className="footer-comment-all">
                        {commentsShow === false ? <p>{lastComments.text}</p> :
                            <div className="footer-comment-all-list">
                                {comments.map((comment) => {
                                    return <div className="footer-comment-all-item"
                                                key={comment._id}>{comment.text}</div>
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
                <Input idUser={idUser} idPost={idPost} comments={comments}/>
            </div>
        </div>
    );
};

export default Post;