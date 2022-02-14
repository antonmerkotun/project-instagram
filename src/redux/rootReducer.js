import {combineReducers} from "redux";
import {usersReducer} from "./ajax/users/getUsersReducer";
import {accountReducer} from "./ajax/account/getAccountReducer";
import {
    getSubscriptionsTrueReducer
} from "./ajax/subscriptions/getSubscriptions/SubscriptionsTrue/getSubscriptionsTrueReducer";
import {
    getSubscriptionsFalseReducer
} from "./ajax/subscriptions/getSubscriptions/SubscriptionsFalse/getSubscriptionsFalseReducer";
import {getPostsReducer} from "./ajax/posts/getPosts/getPostsReducer";
import {getCommentsReducer} from "./ajax/comments/getComments/getCommentsReducer";

export const rootReducer = combineReducers({
    getUsers: usersReducer,
    accountData: accountReducer,
    subscriptionsTrue: getSubscriptionsTrueReducer,
    subscriptionsFalse: getSubscriptionsFalseReducer,
    getPosts: getPostsReducer,
    getComments: getCommentsReducer,
})