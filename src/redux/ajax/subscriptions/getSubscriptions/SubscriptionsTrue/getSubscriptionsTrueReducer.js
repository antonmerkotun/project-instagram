import {GET_SUBSCRIPTIONS_TRUE_STARTED, GET_SUBSCRIPTIONS_TRUE_SUCCESS, GET_SUBSCRIPTIONS_TRUE_FAILURE} from "../../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export  function getSubscriptionsTrueReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SUBSCRIPTIONS_TRUE_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_SUBSCRIPTIONS_TRUE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...action.payload],
                error: null
            };
        case GET_SUBSCRIPTIONS_TRUE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}