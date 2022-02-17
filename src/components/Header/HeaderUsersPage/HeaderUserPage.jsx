import React from 'react';
import "./HeaderUserPage.scss"
import UserAvatar from "../../UserAvatar/UserAvatar";
import {useDispatch} from "react-redux";
import {setSubscriptionsAction} from "../../../redux/ajax/subscriptions/setSubscriptions/setSubscriptionsAction";
import {
    getSubscriptionsTrueAction
} from "../../../redux/ajax/subscriptions/getSubscriptions/SubscriptionsTrue/getSubscriptionsTrueAction";
import {
    getSubscriptionsFalseAction
} from "../../../redux/ajax/subscriptions/getSubscriptions/SubscriptionsFalse/getSubscriptionsFalseAction";

const HeaderUserPage = ({user, posts}) => {
    const dispatch = useDispatch()

    const setHandlerSub = (e) => {
        e.target.style.display = 'none'
      if (user.subscriptions === true){
          dispatch(setSubscriptionsAction(user._id, false))
          dispatch(getSubscriptionsTrueAction())
          dispatch(getSubscriptionsFalseAction())
      } else {
          dispatch(setSubscriptionsAction(user._id, true))
          dispatch(getSubscriptionsTrueAction())
          dispatch(getSubscriptionsFalseAction())
      }
    }

    return (
        <div className="header-user-page">
            <div className="header-user-page_avatar">
                <div className="header-user-page_avatar-image">
                    <UserAvatar avatar={user.avatar}/>
                </div>
            </div>
            <div className="header-user-page_info">
                <div className="header-user-page_info_block">
                    <div className="header-user-page_info_nick-name">{user.name.nickName}</div>
                    <div className="header-user-page_info_button-block">
                        {user.account ? '' :
                            <button className="header-user-page_info_button" onClick={setHandlerSub}>{user.subscriptions === false ? "Подписаться" : "Отписаться"}</button>}
                    </div>
                </div>
                <div className="header-user-page_info_subscription">
                    <span className="header-user-page_info_subscription_number">{posts.length}</span> публикаций
                </div>
                <div className="header-user-page_info_full-name">{user.name.firstName} {user.name.lastName}</div>
            </div>
        </div>
    );
};

export default HeaderUserPage;