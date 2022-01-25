import React from 'react';

//style
import "./Main.scss"

//components
import PostList from "../../components/PostList/PostList";



const Main = () => {
    return (
        <div className="page-main">
            <div className="post-feed">
                <PostList/>
            </div>
            <div className="list-people">
                <div className="list-people-fixed">fix
                </div>
            </div>
        </div>
    );
};

export default Main;