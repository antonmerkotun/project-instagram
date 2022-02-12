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


const Main = () => {
    const dispatch = useDispatch()
    const accountData = useSelector(state => state.accountData) || [];
    const usersData = useSelector(state => state.getUsers) || [];
    const subscriptionsTrue = useSelector(state => state.subscriptionsTrue) || [];
    const subscriptionsFalse = useSelector(state => state.subscriptionsFalse) || [];


    useEffect(() => {
        dispatch(getAccount("/account"))
        dispatch(getUsers("/users"))
        dispatch(getSubscriptionsTrueAction("/users/sub/true"))
        dispatch(getSubscriptionsFalseAction("/users/sub/false"))
    }, [dispatch]);

    return (
        <div className="page-main">
            <div className="post-feed">
                <PostList accountData={accountData}/>
            </div>
            <div className="list-people">
                <div className="list-people-fixed">
                    {/*<Recommendation accountData={accountData} recommendations={usersData}/>*/}
                </div>
            </div>
        </div>
    );
};

export default Main;