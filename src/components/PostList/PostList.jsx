import React, {useEffect, useState} from 'react';
import "./PostList.scss"
import Post from "../Post/Post";
import {addTodo, getUsers} from "../../redux/ajax/users/getUsersAction";
import {useDispatch, useSelector} from "react-redux";


const PostList = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.getUsers.todos) || []

    useEffect(() => {
        dispatch(getUsers("/users"))
    }, [dispatch])


    return (
        <div className="post-list">
            {users.map((user) => {
                    return user.posts.map(el => {
                        return <li className="post-list-block" key={el._id}>
                            <Post
                                name={user.name}
                                lastName={user.lastName}
                                avatar={user.avatar}
                                post={el.img}
                                favoriteNumber={el.comments.length}
                            />
                        </li>
                    })
                }
            )}
        </div>
    );
};

export default PostList;


// <li className="post-list-block" key={user._id}>
//     <Post
//         name={user.name}
//         lastName={user.lastName}
//         avatar={user.avatar}
//         post={user.posts}
//         favoriteNumber={"123"}
//     />
// </li>