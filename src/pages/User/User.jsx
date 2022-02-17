import React, {useEffect} from 'react';


//style
import "./User.scss"
import {useDispatch, useSelector} from "react-redux";
import HeaderUserPage from "../../components/Header/HeaderUsersPage/HeaderUserPage";
import {getUserIdAction} from "../../redux/ajax/users/userId/getUsersIdAction";


const User = ({userData}) => {
    const dispatch = useDispatch()
    const pathname = document.location.pathname
    const idUser = pathname.split("/")
    const postsData = useSelector(state => state.getPosts)
    const posts = postsData.data.filter(post => post.user === userData.data._id)


    useEffect(() => {
        dispatch(getUserIdAction(idUser[2]))
    }, [])

    return (
        <div className="page-user">
            {userData.loading === false &&
                <HeaderUserPage user={userData.data} posts={posts}/>
            }
        </div>
    )
}

export default User;