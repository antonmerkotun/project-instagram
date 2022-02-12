import React from 'react';
import Loading from "../Loading/Loading";
import UserAvatar from "../UserAvatar/UserAvatar";

function UsersList({users, button}) {

    const addSubscriptions = (e) => {
        users.forEach(user => {
            if (user._id === e.target.id) {
                console.log(user)
                fetch('/account/subscriptions', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(user)
                })
            }
        })
    }

    return (
        <div className="recommendation-list">
            {users.map((user) => (
                <div className="recommendation-list-block" key={user._id}>
                    <div className="recommendation-list-user">
                        <div className="recommendation-list-user-avatar">
                            <UserAvatar avatar={user.avatar}/>
                        </div>
                        <div className="recommendation-list-user-nickName">
                            <p className="recommendation-list-user-nickName-text">{user.name.nickName}</p>
                        </div>
                    </div>
                    {button === true &&
                        <div>
                            <button id={user._id} className="recommendation-list-user-button" onClick={addSubscriptions}>Подписаться</button>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default UsersList;