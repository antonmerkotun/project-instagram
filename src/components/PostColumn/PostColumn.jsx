import React, {useState} from 'react';
import "./PostColumn.scss"
import Modal from "../Modal/Modal";
import {useSelector} from "react-redux";


function PostColumn({idUser, posts, comments}) {
    const [modal, setModal] = useState(false)
    const [post, setPost] = useState('')

    const openModal = (e) => {
        setModal(true)
        posts.map(post => {
            if (post._id === e.target.id) {
                setPost(post)
            }
        })
    }

    const handlerModal = (e) => {
        if (e.target.className === "modal") {
            setModal(false)
        }
    }

    return (
        <>
            <div className="post-column">
                {posts.length >= 1 && posts.map(post => {
                    return <div className="post_image_block" key={post._id}>
                        <div>
                            <div className="post_image_block-hover" id={post._id} onClick={openModal}/>
                            <div className="post_image_block-hover_icon">
                                <span>
                                    <svg aria-label="Комментировать" className="_8-yf5"
                                         color="#ffffff" fill="#ffffff"
                                         height="20" role="img" viewBox="0 0 24 24" width="20">
                                    <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="#ffffff"
                                          stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/>
                                </svg>
                                </span>
                                <span
                                    className="post_image_block-hover_num">{comments.filter(comment => post._id === comment.post).length}</span>
                            </div>
                        </div>
                        <div className="post_image" style={{backgroundImage: `url(${post.image})`}}/>
                    </div>
                })}
            </div>
            {modal === true && <Modal handlerModal={handlerModal} post={post} comments={comments.filter(comment => comment.post === post._id)}/>}
        </>
    );
}

export default PostColumn;