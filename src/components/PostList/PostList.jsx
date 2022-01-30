//import
import React, {useEffect, useState} from 'react';
import {getUsers} from "../../redux/ajax/users/getUsersAction";
import {useDispatch, useSelector} from "react-redux";

//style
import "./PostList.scss"

//components
import Post from "../Post/Post";
import Loading from "../Loading/Loading";


const PostList = () => {
    const dispatch = useDispatch()
    const usersStatus = useSelector(state => state.getUsers) || []

    useEffect(() => {
        dispatch(getUsers("/users"))
    }, [dispatch])


    return (
        <div className="post-list">
            {usersStatus.loading === true ? <Loading/> : <>
                {usersStatus.users.map((user) => {
                        return user.posts.map(post => {
                            return <li className="post-list-block" key={post._id}>
                                <Post
                                    nickName={user.nickName}
                                    lastName={user.lastName}
                                    avatar={user.avatar}
                                    post={post.img}
                                    favoriteNumber={post.comments.length}
                                />
                            </li>
                        })
                    }
                )}</>
            }
        </div>
    );
};

export default PostList;