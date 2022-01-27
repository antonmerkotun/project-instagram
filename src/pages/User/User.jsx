import React, {useState} from 'react';
//style
import "./User.scss"

const User = () => {
    const [users, setUsers] = useState([])

    fetch('/users')
        .then(data => data.json())
        .then(data => {
            setUsers(data)
        })


    return (
        <div className="page-user">
            {users.map(user => (
                <div key={user._id}>
                    <div>{user.name}</div>
                    <div>{user.avatar}</div>
                </div>
            ))}
        </div>
    );
};

export default User;