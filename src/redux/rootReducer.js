import {combineReducers} from "redux";
import {usersReducer} from "./ajax/users/getUsersReducer";

export const rootReducer = combineReducers({
    getUsers: usersReducer,
    // postList: postListReducer,
})