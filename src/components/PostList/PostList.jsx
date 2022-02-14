//import
import React, {useEffect, useState} from 'react';
import {getUsers} from "../../redux/ajax/users/getUsersAction";
import {useDispatch, useSelector} from "react-redux";

//style
import "./PostList.scss"

//components
import Post from "../Post/Post";
import Loading from "../Loading/Loading";


const PostList = ({usersData, postsData, commentsData}) => {

    useEffect(() => {
        console.log(usersData)
        console.log(postsData)
        console.log(commentsData)
    }, [usersData])

    return (
        <div className="post-list">
            {/*{postsData.error === "Unexpected token P in JSON at position 0" && "Произошла ошибка! Проверьте подключение к базе данных MongoDB."}*/}
            {/*{postsData.loading === true ? <Loading/> : <>*/}
            {/*    {postsData.data === undefined ? <p>нету подписок</p> : <>*/}
                    {/*{accountData.account.subscriptions.length === 0 ? '' : accountData.account.subscriptions.map((user) => {*/}
                    {/*        return accountData.account.subscriptions.map(post => {*/}
                    {/*            return <li className="post-list-block" key={post._id}>*/}
                    {/*                <Post*/}
                    {/*                    nickName={user.nickName}*/}
                    {/*                    lastName={user.lastName}*/}
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