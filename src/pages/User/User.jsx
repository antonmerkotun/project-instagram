import React, {useEffect, useState} from 'react';


//style
import "./User.scss"
import {useDispatch} from "react-redux";
import HeaderUserPage from "../../components/Header/HeaderUsersPage/HeaderUserPage";
import {getUserIdAction} from "../../redux/ajax/users/userId/getUsersIdAction";


const User = ({userData}) => {
    const dispatch = useDispatch()
    const {name, avatar, posts} = userData.data

    const pathname = document.location.pathname
    const idUser = pathname.split("/")

    useEffect(() => {
        dispatch(getUserIdAction(idUser[2]))
    }, [])

    return (
        <>
            {userData.data.account && <p>ssss</p>}
            {userData.loading === false &&
                <>
                    <div className="page-user">
                        <HeaderUserPage/>
                        {name.nickName}
                        <div className="image-block">
                            <div className="image" style={{backgroundImage: `url(${avatar})`}}/>
                        </div>
                    </div>
                </>
            }
        </>


    )
        ;
};

export default User;