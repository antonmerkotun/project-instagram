import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useEffect} from "react";
import User from "./pages/User/User";
import NotFound from "./pages/NotFound/NotFound";
import {useDispatch, useSelector} from "react-redux";
import {getAccount} from "./redux/ajax/account/getAccountAction";
import {getUsers} from "./redux/ajax/users/getUsersAction";
import {
    getSubscriptionsTrueAction
} from "./redux/ajax/subscriptions/getSubscriptions/SubscriptionsTrue/getSubscriptionsTrueAction";
import {
    getSubscriptionsFalseAction
} from "./redux/ajax/subscriptions/getSubscriptions/SubscriptionsFalse/getSubscriptionsFalseAction";
import {getPostsAction} from "./redux/ajax/posts/getPosts/getPostsAction";
import {getCommentsAction} from "./redux/ajax/comments/getComments/getCommentsAction";

function App() {
    const dispatch = useDispatch()
    const accountData = useSelector(state => state.accountData) || []
    const usersData = useSelector(state => state.getUsers) || [];
    const subscriptionsTrue = useSelector(state => state.subscriptionsTrue) || [];
    const subscriptionsFalse = useSelector(state => state.subscriptionsFalse) || [];
    const postsData = useSelector(state => state.getPosts) || [];
    const commentsData = useSelector(state => state.getComments) || [];


    useEffect(() => {
        dispatch(getAccount("/account"))
        dispatch(getUsers("/users"))
        dispatch(getSubscriptionsTrueAction("/users/sub/true"))
        dispatch(getSubscriptionsFalseAction("/users/sub/false"))
        dispatch(getPostsAction("/posts"))
        dispatch(getCommentsAction("/comments"))
    }, [dispatch]);


    return (
        <BrowserRouter>
            <div className="container">
                <Header account={accountData.account}/>
                <div className="scroll-block">
                    <Routes>
                        <Route exact path="/" element={
                            <Main accountData={accountData}
                                  subscriptionsFalse={subscriptionsFalse}
                                  subscriptionsTrue={subscriptionsTrue}
                                  postsData={postsData}
                                  commentsData={commentsData}
                                  usersData={usersData}/>}/>
                        <Route exact path="/user" element={<User/>}/>
                        <Route exact path="/notfound" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
