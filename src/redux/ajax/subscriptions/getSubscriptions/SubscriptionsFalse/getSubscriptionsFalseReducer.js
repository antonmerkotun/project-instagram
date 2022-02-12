import {GET_SUBSCRIPTIONS_FALSE_STARTED, GET_SUBSCRIPTIONS_FALSE_SUCCESS, GET_SUBSCRIPTIONS_FALSE_FAILURE} from "../../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export  function getSubscriptionsFalseReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SUBSCRIPTIONS_FALSE_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_SUBSCRIPTIONS_FALSE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...action.payload],
                error: null
            };
        case GET_SUBSCRIPTIONS_FALSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}