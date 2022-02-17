import React, {useState} from 'react';
import "./PostColumn.scss"
import Modal from "../Modal/Modal";


function PostColumn({posts}) {
    const [modal, setModal] = useState(false)


    const openModal = () => {
        setModal(true)
    }

    return (
        <>
            <div className="post-column">
                {posts.length >= 1 && posts.map(post => {
                    return <div className="post_image_block" key={post._id}>
                        <div className="post_image" style={{backgroundImage: `url(${post.image})`}}
                             onClick={openModal}/>
                    </div>
                })}
            </div>
            {modal === true && <Modal/>}
        </>
    );
}

export default PostColumn;