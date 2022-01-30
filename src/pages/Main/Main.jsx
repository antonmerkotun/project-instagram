//import
import React from 'react';

//style
import "./Main.scss"

//components
import PostList from "../../components/PostList/PostList";
import Recommendation from "../../components/Recommendation/Recommendation";


const Main = () => {
    return (
        <div className="page-main">
            <div className="post-feed">
                <PostList/>
            </div>
            <div className="list-people">
                <div className="list-people-fixed">
                    <Recommendation/>
                </div>
            </div>
        </div>
    );
};

export default Main;