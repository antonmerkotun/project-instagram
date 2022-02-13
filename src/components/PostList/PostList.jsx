//import
import React, {useEffect, useState} from 'react';
import {getUsers} from "../../redux/ajax/users/getUsersAction";
import {useDispatch, useSelector} from "react-redux";

//style
import "./PostList.scss"

//components
import Post from "../Post/Post";
import Loading from "../Loading/Loading";


const PostList = ({accountData}) => {
    console.log(accountData)
    return (
        <div className="post-list">
            {accountData.error === "Unexpected token P in JSON at position 0" && "Произошла ошибка! Проверьте подключение к базе данных MongoDB."}
            {accountData.loading === true ? <Loading/> : <>
                {/*{accountData.account.subscriptions === undefined ? <p>нету подписок</p> : <>*/}
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
            </>
            }
        </div>
    );
};

export default PostList;