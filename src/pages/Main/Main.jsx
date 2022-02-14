//import
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

//style
import "./Main.scss"

//components
import PostList from "../../components/PostList/PostList";
import Recommendation from "../../components/Recommendation/Recommendation";
import {getUsers} from "../../redux/ajax/users/getUsersAction";
import {getAccount} from "../../redux/ajax/account/getAccountAction";
import {
    getSubscriptionsTrueAction
} from "../../redux/ajax/subscriptions/getSubscriptions/SubscriptionsTrue/getSubscriptionsTrueAction";
import {
    getSubscriptionsFalseAction
} from "../../redux/ajax/subscriptions/getSubscriptions/SubscriptionsFalse/getSubscriptionsFalseAction";


const Main = ({accountData, usersData, subscriptionsTrue, subscriptionsFalse, postsData, commentsData}) => {


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