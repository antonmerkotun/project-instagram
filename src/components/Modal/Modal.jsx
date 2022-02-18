import React from 'react';
import "./Modal.scss"
import {useSelector} from "react-redux";
import UserAvatar from "../UserAvatar/UserAvatar";
import Input from "../Input/Input";

function Modal({handlerModal, post, comments}) {
    const userData = useSelector(state => state.getUser)


    return (
        <div onClick={handlerModal}>
            <div className="modal">
                <div className="modal_post">
                    <div className="modal_post_block">
                        <div className="modal-image" style={{backgroundImage: `url(${post.image})`}}/>
                    </div>
                    <div className="modal_post_comments">
                        <div className="modal_post_comments_avatar">
                            <div className="modal_post_comments_avatar-image">
                                <UserAvatar avatar={userData.data.avatar}/>
                            </div>
                            <div className="modal_post_comments_nickName">{userData.data.name.nickName}</div>
                        </div>
                        <div className="modal_post_comments_body">
                            {comments.map(comment => {
                                return <div key={comment._id} className="modal_post_comments_item">{comment.text}</div>
                            })}
                        </div>
                        <Input idUser={userData.data._id} idPost={post._id}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;