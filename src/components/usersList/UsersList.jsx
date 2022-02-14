import React, {useEffect} from 'react';
import Loading from "../Loading/Loading";
import UserAvatar from "../UserAvatar/UserAvatar";

function UsersList({users, button}) {


    const setSubscriptions = (e) => {
        e.target.innerText = ''
        users.forEach(user => {
            if (user._id === e.target.id) {
                if (button === "sav") {
                    fetch(`/users/sub/set/${user._id}`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({
                            "subscriptions": true
                        })
                    })
                }
                if (button === "del") {
                    fetch(`/users/sub/set/${user._id}`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({
                            "subscriptions": false
                        })
                    })
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
                                onClick={setSubscriptions}>{button === "sav" ? "Подписаться" : "Отписаться"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UsersList;