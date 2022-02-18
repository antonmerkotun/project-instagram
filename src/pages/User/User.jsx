import React, {useEffect, useState} from 'react';


//style
import "./User.scss"
import {useDispatch, useSelector} from "react-redux";
import HeaderUserPage from "../../components/HeaderUsersPage/HeaderUserPage";
import {getUserIdAction} from "../../redux/ajax/users/userId/getUsersIdAction";
import PostColumn from "../../components/PostColumn/PostColumn";


const User = ({userData, comments}) => {
    window.scrollTo(0, 0)
    const dispatch = useDispatch()
    const pathname = document.location.pathname
    const idUser = pathname.split("/")
    const postsData = useSelector(state => state.getPosts)
    const posts = postsData.data.filter(post => post.user === userData.data._id)
    const [commentPost, setCommentPost] = useState("")


        useEffect(() => {
            dispatch(getUserIdAction(idUser[2]))
        }, [])


    return (
        <div className="page-user">

            {userData.loading === false && <>
                <HeaderUserPage user={userData.data} posts={posts}/>
                <PostColumn idUser={idUser[2]} posts={posts} comments={comments}/>
            </>
            }
        </div>
    )
}

export default User;