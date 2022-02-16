import React from 'react';
import UserAvatar from "../UserAvatar/UserAvatar";
import {setSubscriptionsAction} from "../../redux/ajax/subscriptions/setSubscriptions/setSubscriptionsAction";
import {useDispatch} from "react-redux";

function UsersList({users, button}) {
    const dispatch = useDispatch()

    const setSubscription = (e) => {
        e.target.innerText = ''
        users.forEach(user => {
            if (user._id === e.target.id) {
                if (button === "sav") {
                    dispatch(setSubscriptionsAction(user._id, true))
                }
                if (button === "del") {
                    dispatch(setSubscriptionsAction(user._id, false))
                }
            }
        })
    }

    return (
        <div className="recommendation-list">
            {users.map((user) => (
                <div className="recommendation-list-block" key={user._id}>
                    <div className="recommendation-list-user">
                        <div className="recommendation-list-user-avatar">
                            <UserAvatar avatar={user.avatar} user={user}/>
                        </div>
                        <div className="recommendation-list-user-nickName">
                            <p className="recommendation-list-user-nickName-text">{user.name.nickName}</p>
                        </div>
                    </div>
                    <div>
                        <button id={user._id} className="recommendation-list-user-button"
                                onClick={setSubscription}>{button === "sav" ? "Подписаться" : "Отписаться"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UsersList;