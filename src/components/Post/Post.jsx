import React from 'react';
import "./Post.scss"


const Post = (props) => {
    const {avatar, userName, content} = props

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__header-user">
                    <div className="post__header-avatar" style={{backgroundImage: `url(${avatar})`}}/>
                    <div>
                        <p className="post__header-name">{userName}</p>
                    </div>
                </div>
                <div className="post__header-user__burger">
                    <button className="post__header-user__button">
                        <img src="https://img.icons8.com/external-gradak-royyan-wijaya/24/000000/external-anchor-gradak-interface-solidarity-gradak-royyan-wijaya-2.png" alt="content-image"/>
                    </button>
                </div>
            </div>
            <div className="post-content">
                <div className="post-content_block" style={{backgroundImage: `url(${content})`}}/>
            </div>
            <div className="footer">
                footer
            </div>
        </div>
    );
};

export default Post;