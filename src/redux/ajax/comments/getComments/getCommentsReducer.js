import {GET_COMMENTS_STARTED, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE} from "../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export function getCommentsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...action.payload],
                error: null
            };
        case GET_COMMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}