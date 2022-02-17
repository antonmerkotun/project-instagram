import React from 'react';
import {setSubscriptionsAction} from "../../redux/ajax/subscriptions/setSubscriptions/setSubscriptionsAction";
import {useDispatch} from "react-redux";

const SubscriptionButton = ({id, users, button}) => {
    const dispatch = useDispatch()

    const setSubscription = (e) => {
        e.target.innerText = ''
        users.forEach(user => {
            if (user._id === e.target.id) {
                if (button === "sav") {
                    dispatch(setSubscriptionsAction(user._id, true))
                }
                if (button === "del") {
                    dispatch(setSubscriptionsAction(user._id, false))
                }
            }
        })
    }


    return (
        <button id={id} className="recommendation-list-user-button"
                onClick={setSubscription}>{button === "sav" ? "Подписаться" : "Отписаться"}
        </button>
    );
};

export default SubscriptionButton;