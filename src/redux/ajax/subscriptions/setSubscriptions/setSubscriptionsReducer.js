import {SET_SUBSCRIPTIONS_STARTED, SET_SUBSCRIPTIONS_SUCCESS, SET_SUBSCRIPTIONS_FAILURE} from "../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export  function setSubscriptionsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SUBSCRIPTIONS_STARTED:
            return {
                ...state,
                loading: true
            };
        case SET_SUBSCRIPTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...action.payload],
                error: null
            };
        case SET_SUBSCRIPTIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}