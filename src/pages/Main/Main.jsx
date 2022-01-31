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


const Main = () => {
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.getUsers) || []
    const accountData = useSelector(state => state.accountData) || []

    useEffect(() => {
        dispatch(getUsers("/users"))
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAccount("/account"))
    }, [dispatch])

    return (
        <div className="page-main">
            <div className="post-feed">
                <PostList users={usersData}/>
            </div>
            <div className="list-people">
                <div className="list-people-fixed">
                    <Recommendation account={accountData.account} recommendations={usersData}/>
                </div>
            </div>
        </div>
    );
};

export default Main;