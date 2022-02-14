//import
import React, {useEffect, useState} from 'react';
import {getUsers} from "../../redux/ajax/users/getUsersAction";
import {useDispatch, useSelector} from "react-redux";

//style
import "./PostList.scss"

//components
import Post from "../Post/Post";
import Loading from "../Loading/Loading";
import {logDOM} from "@testing-library/react";


const PostList = ({usersData, postsData, commentsData}) => {


    return (
        <div className="post-list">

            {postsData.error === "Unexpected token P in JSON at position 0" && "Произошла ошибка! Проверьте подключение к базе данных MongoDB."}
            {/*{usersData.data.map(users => {*/}
            {/*    return postsData.data.map(posts => {*/}
            {/*        if (users._id === posts.user) {*/}
            {/*            return <li className="post-list-block" key={posts._id}>*/}
            {/*                <Post*/}
            {/*                    idUser={users._id}*/}
            {/*                    idPost={posts._id}*/}
            {/*                    nickName={users.name.nickName}*/}
            {/*                    avatar={users.avatar}*/}
            {/*                    post={posts.image}*/}
            {/*                    commentsData={commentsData.data.forEach(comments => {*/}
            {/*                        if (posts._id === comments.post) {*/}
            {/*                            console.log(comments)*/}
            {/*                            return comments*/}
            {/*                        }*/}
            {/*                    })}*/}
            {/*                />*/}
            {/*            </li>*/}
            {/*        }*/}
            {/*    })*/}
            {/*})}*/}
            {/*{console.log(usersData)}*/}

            {usersData.data.map(users => {
                return postsData.data.map(posts => {
                    if (users._id === posts.user){
                        return commentsData.data.map(comments => {
                            if (users._id === comments.user){
                                if (posts._id === comments.post){

                                }
                            }
                        })
                    }
                })
            })}


            {/*{postsData.loading === true ? <Loading/> : <>*/}
            {/*    {postsData.data === undefined ? <p>нету подписок</p> : <>*/}
            {/*{accountData.account.subscriptions.length === 0 ? '' : accountData.account.subscriptions.map((user) => {*/}
            {/*        return accountData.account.subscriptions.map(post => {*/}
            {/*            return <li className="post-list-block" key={post._id}>*/}
            {/*                <Post*/}
            {/*                    nickName={user.nickName}*/}
            {/*                    avatar={user.avatar}*/}
            {/*                    post={post.img}*/}
            {/*                    comments={post.comments}*/}
            {/*                    favoriteNumber={post.comments.length}*/}
            {/*                />*/}
            {/*            </li>*/}
            {/*        })*/}
            {/*    }*/}
            {/*)}*/}
            {/*</>*/}
            {/*}*/}
            {/*</>*/}
            {/*}*/}
        </div>
    );
};

export default PostList;