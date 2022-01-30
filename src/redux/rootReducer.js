import {combineReducers} from "redux";
import {usersReducer} from "./ajax/users/getUsersReducer";
import {accountReducer} from "./ajax/account/getAccountReducer";

export const rootReducer = combineReducers({
    getUsers: usersReducer,
    accountData: accountReducer,
    // postList: postListReducer,
})