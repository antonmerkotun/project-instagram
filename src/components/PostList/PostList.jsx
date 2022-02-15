//import
import React, {useEffect, useState} from 'react';


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
                                comments={commentsData.data.filter(comments => posts._id === comments.post)}
                            />
                        </li>
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