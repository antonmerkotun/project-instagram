import React from 'react';
import {setSubscriptionsAction} from "../../redux/ajax/subscriptions/setSubscriptions/setSubscriptionsAction";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

//
import UserAvatar from "../UserAvatar/UserAvatar";
import {getUserIdAction} from "../../redux/ajax/users/userId/getUsersIdAction";
import SubscriptionButton from "../SubscriptionButton/SubscriptionButton";

function UsersList({users, button}) {
    const dispatch = useDispatch()
    //
    // const setSubscription = (e) => {
    //     e.target.innerText = ''
    //     users.forEach(user => {
    //         if (user._id === e.target.id) {
    //             if (button === "sav") {
    //                 dispatch(setSubscriptionsAction(user._id, true))
    //             }
    //             if (button === "del") {
    //                 dispatch(setSubscriptionsAction(user._id, false))
    //             }
    //         }
    //     })
    // }


    return (
        <div className="recommendation-list">
            {users.map((user) => (
                <div className="recommendation-list-block" key={user._id}>
                    <div className="recommendation-list-user">
                        <div className="recommendation-list-user-avatar" onClick={() => {dispatch(getUserIdAction(user._id))}}>
                            <Link to={`/user/${user._id}`}>
                                <UserAvatar avatar={user.avatar} user={user}/>
                            </Link>
                        </div>
                        <div className="recommendation-list-user-nickName" onClick={() => {dispatch(getUserIdAction(user._id))}}>
                            <Link to={`/user/${user._id}`} className="link">
                                <p className="recommendation-list-user-nickName-text">{user.name.nickName}</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        {/*<button id={user._id} className="recommendation-list-user-button"*/}
                        {/*        onClick={setSubscription}>{button === "sav" ? "Подписаться" : "Отписаться"}*/}
                        {/*</button>*/}
                        <SubscriptionButton id={user._id} users={users} button={button}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UsersList;