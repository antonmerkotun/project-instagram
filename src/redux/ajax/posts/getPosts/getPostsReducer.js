import {GET_POSTS_STARTED, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from "../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export function getPostsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...action.payload],
                error: null
            };
        case GET_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}