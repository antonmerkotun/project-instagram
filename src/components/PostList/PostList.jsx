//import
import React from 'react';


//style
import "./PostList.scss"

//components
import Post from "../Post/Post";


const PostList = ({usersData, postsData, commentsData}) => {

    return (
        <div className="post-list">
            {postsData.error === "Unexpected token P in JSON at position 0" && "Произошла ошибка! Проверьте подключение к базе данных MongoDB."}
            {usersData.data.map(users => {
                return postsData.data.map(posts => {
                    if (users._id === posts.user) {
                        return <li className="post-list-block" key={posts._id}>
                            <Post
                                idUser={users._id}
                                idPost={posts._id}
                                nickName={users.name.nickName}
                                avatar={users.avatar}
                                post={posts.image}
                                fav={posts.favorite}
                                comments={commentsData.data.filter(comments => posts._id === comments.post)}
                            />
                        </li>
                    }
                })
            })}
        </div>
    );
};

export default PostList;