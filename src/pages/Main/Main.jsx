//imports
import React from 'react';
import PropTypes from "prop-types";

//style
import "./Main.scss";

//components
import PostList from "../../components/PostList/PostList";
import Recommendation from "../../components/Recommendation/Recommendation";
import UserAvatar from "../../components/UserAvatar/UserAvatar";


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

Main.protoType = {
    accountData: PropTypes.object,
    subscriptionsTrue: PropTypes.object,
    subscriptionsFalse: PropTypes.object,
    postsData: PropTypes.object,
    commentsData: PropTypes.object,
}

export default Main;