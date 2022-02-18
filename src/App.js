//imports
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";

//style
import './App.css';

//components
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import User from "./pages/User/User";
import NotFound from "./pages/NotFound/NotFound";
import {getAccount} from "./redux/ajax/account/getAccountAction";
import {getUsers} from "./redux/ajax/users/users/getUsersAction";
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
    const accountData = useSelector(state => state.accountData)
    const subscriptionsTrue = useSelector(state => state.subscriptionsTrue)
    const subscriptionsFalse = useSelector(state => state.subscriptionsFalse)
    const postsData = useSelector(state => state.getPosts)
    const commentsData = useSelector(state => state.getComments)
    const userData = useSelector(state => state.getUser)

    useEffect(() => {
        dispatch(getAccount())
        dispatch(getSubscriptionsTrueAction())
        dispatch(getSubscriptionsFalseAction())
        dispatch(getPostsAction())
        dispatch(getCommentsAction())
        dispatch(getUsers())
    }, []);

    return (
        <BrowserRouter>
            <div className="header_line"/>
            <div className="container">
                <Header account={accountData.data}/>
                <div className="scroll-block">
                    <Routes>
                        <Route exact path="/" element={
                            <Main accountData={accountData}
                                  subscriptionsFalse={subscriptionsFalse}
                                  subscriptionsTrue={subscriptionsTrue}
                                  postsData={postsData}
                                  commentsData={commentsData}/>}/>
                        <Route exact path="/user/:id" element={<User userData={userData} comments={commentsData.data}/>}/>
                        <Route exact path="/message" element={<NotFound titlePage={"message"}/>}/>
                        <Route exact path="/newpost" element={<NotFound titlePage={"newpost"}/>}/>
                        <Route exact path="/compass" element={<NotFound titlePage={"compass"}/>}/>
                        <Route exact path="/favorite" element={<NotFound titlePage={"favorite"}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
