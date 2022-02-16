import React from 'react';
import UserAvatar from "../UserAvatar/UserAvatar";
import {setSubscriptionsAction} from "../../redux/ajax/subscriptions/setSubscriptions/setSubscriptionsAction";
import {useDispatch} from "react-redux";
import {
    getSubscriptionsTrueAction
} from "../../redux/ajax/subscriptions/getSubscriptions/SubscriptionsTrue/getSubscriptionsTrueAction";
import {
    getSubscriptionsFalseAction
} from "../../redux/ajax/subscriptions/getSubscriptions/SubscriptionsFalse/getSubscriptionsFalseAction";
import {getPostsAction} from "../../redux/ajax/posts/getPosts/getPostsAction";

function UsersList({users, button}) {
    const dispatch = useDispatch()

    const setSubscription = (e) => {
        e.target.innerText = ''
        users.forEach(user => {
            if (user._id === e.target.id) {
                if (button === "sav") {
                    dispatch(setSubscriptionsAction(user._id, true))
                    dispatch(getSubscriptionsTrueAction())
                    dispatch(getSubscriptionsFalseAction())
                    dispatch(getPostsAction())
                }
                if (button === "del") {
                    dispatch(setSubscriptionsAction(user._id, false))
                    dispatch(getSubscriptionsTrueAction())
                    dispatch(getSubscriptionsFalseAction())
                    dispatch(getPostsAction())
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