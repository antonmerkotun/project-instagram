import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

//style
import "./User.scss"

//components
import HeaderUserPage from "../../components/HeaderUsersPage/HeaderUserPage";
import {getUserIdAction} from "../../redux/ajax/users/userId/getUsersIdAction";
import PostColumn from "../../components/PostColumn/PostColumn";
import Main from "../Main/Main";


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
};

User.protoType = {
    userData: PropTypes.object,
    comments: PropTypes.object,
}

export default User;