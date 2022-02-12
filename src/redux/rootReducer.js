import {combineReducers} from "redux";
import {usersReducer} from "./ajax/users/getUsersReducer";
import {accountReducer} from "./ajax/account/getAccountReducer";
import {
    getSubscriptionsTrueReducer
} from "./ajax/subscriptions/getSubscriptions/SubscriptionsTrue/getSubscriptionsTrueReducer";
import {
    getSubscriptionsFalseReducer
} from "./ajax/subscriptions/getSubscriptions/SubscriptionsFalse/getSubscriptionsFalseReducer";

export const rootReducer = combineReducers({
    getUsers: usersReducer,
    accountData: accountReducer,
    subscriptionsTrue: getSubscriptionsTrueReducer,
    subscriptionsFalse: getSubscriptionsFalseReducer
    // postList: postListReducer,
})