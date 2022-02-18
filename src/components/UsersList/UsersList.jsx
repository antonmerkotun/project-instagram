//imports
import React from 'react';
import {setSubscriptionsAction} from "../../redux/ajax/subscriptions/setSubscriptions/setSubscriptionsAction";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

//components
import UserAvatar from "../UserAvatar/UserAvatar";
import {getUserIdAction} from "../../redux/ajax/users/userId/getUsersIdAction";
import {
    getSubscriptionsTrueAction
} from "../../redux/ajax/subscriptions/getSubscriptions/SubscriptionsTrue/getSubscriptionsTrueAction";
import {
    getSubscriptionsFalseAction
} from "../../redux/ajax/subscriptions/getSubscriptions/SubscriptionsFalse/getSubscriptionsFalseAction";
import PropTypes from "prop-types";
import Main from "../../pages/Main/Main";

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
                }
                if (button === "del") {
                    dispatch(setSubscriptionsAction(user._id, false))
                    dispatch(getSubscriptionsTrueAction())
                    dispatch(getSubscriptionsFalseAction())
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
                            <Link to={`/user/${user._id}`}>
                                <UserAvatar avatar={user.avatar} user={user}/>
                            </Link>
                        </div>
                        <div className="recommendation-list-user-nickName">
                            <Link to={`/user/${user._id}`} className="link">
                                <p className="recommendation-list-user-nickName-text">{user.name.nickName}</p>
                            </Link>
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

UsersList.protoType = {
    users: PropTypes.object,
    button: PropTypes.string,
}

export default UsersList;