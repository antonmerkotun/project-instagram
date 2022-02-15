import {POST_COMMENTS_STARTED, POST_COMMENTS_SUCCESS, POST_COMMENTS_FAILURE} from "../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export function postCommentsReducer(state = initialState, action) {
    switch (action.type) {
        case POST_COMMENTS_STARTED:
            return {
                ...state,
                loading: true
            };
        case POST_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...action.payload],
                error: null
            };
        case POST_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}