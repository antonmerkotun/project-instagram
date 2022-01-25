import React from 'react';
import "./Post.scss"
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {AiOutlineMessage} from "react-icons/ai";
import {RiSendPlaneFill} from "react-icons/ri";
import {BsBookmarkStar} from "react-icons/bs";


const Post = (props) => {
    const {avatar, userName, content, favoriteNumber} = props

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__header-user ">
                    <div className="post__header-avatar" style={{backgroundImage: `url(${avatar})`}}/>
                    <div>
                        <p className="post__header-name">{userName}</p>
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
                <div className="post-content_block" style={{backgroundImage: `url(${content})`}}/>
            </div>
            <div className="footer">
                <div className="footer__communication">
                    <div>
                        <button className="footer__communication-button"><MdOutlineFavoriteBorder
                            className="footer-icon"/></button>
                        <button className="footer__communication-button"><AiOutlineMessage className="footer-icon"/>
                        </button>
                        <button className="footer__communication-button"><RiSendPlaneFill className="footer-icon"/>
                        </button>
                    </div>
                    <div>
                        <button className="footer__communication-button"><BsBookmarkStar className="footer-icon"/>
                        </button>
                    </div>
                </div>
                <div className="footer-favorite">
                    <p>{favoriteNumber} отметок "Нравится"</p>
                </div>
                <div className="footer-comment">
                    <div className="footer-comment-content">Комментарии</div>
                    <button className="footer-comment-button">Посмотреть все комментарии</button>
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