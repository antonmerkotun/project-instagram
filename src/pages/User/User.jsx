import React, {useEffect, useState} from 'react';


//style
import "./User.scss"
import {getUserIdAction} from "../../redux/ajax/users/userId/getUsersIdAction";
import {useDispatch, useSelector} from "react-redux";


const User = ({userData}) => {
    const dispatch = useDispatch()
    const {name, avatar, posts} = userData.data

    useEffect(() => {
        dispatch(getUserIdAction(document.location.pathname))
    }, [])

    return (
        <div className="page-user">
            {userData.data.name &&
                <>
                    {name.nickName}
                    <div className="image-block">
                        <div className="image" style={{backgroundImage: `url(${avatar})`}}/>
                    </div>
                </>}
            {/*{users.map(user => (*/}
            {/*    <div key={user._id}>*/}
            {/*        <div>{user.name}</div>*/}
            {/*        <div className="image-block">*/}
            {/*        <div className="image" style={{backgroundImage: `url(${user.avatar})`}}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
};

export default User;