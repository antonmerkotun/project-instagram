//import
import React from 'react';

//style
import "./Main.scss"

//components
import PostList from "../../components/PostList/PostList";
import Recommendation from "../../components/Recommendation/Recommendation";


const Main = ({accountData, subscriptionsTrue, subscriptionsFalse, postsData, commentsData}) => {

    return (
        <div className="page-main">
            <div className="post-feed">
                <PostList usersData={subscriptionsTrue} postsData={postsData} commentsData={commentsData}/>
            </div>
            <div className="list-people">
                <div className="list-people-fixed">
                    <Recommendation accountData={accountData} subscriptions={subscriptionsTrue}
                                    recommendations={subscriptionsFalse}/>
                </div>
            </div>
        </div>
    );
};

export default Main;