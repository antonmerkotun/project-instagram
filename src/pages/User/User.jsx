import React, {useEffect, useState} from 'react';


//style
import "./User.scss"


const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/users')
            .then(data => data.json())
            .then(data => {
                setUsers(data)
            })
    }, [])


    return (
        <div className="page-user">
            {users.map(user => (
                <div key={user._id}>
                    <div>{user.name}</div>
                    <div className="image-block">
                    <div className="image" style={{backgroundImage: `url(${user.avatar})`}}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default User;