import {GET_SUBSCRIPTIONS_FALSE_STARTED, GET_SUBSCRIPTIONS_FALSE_SUCCESS, GET_SUBSCRIPTIONS_FALSE_FAILURE} from "../../../../types";

export const getSubscriptionsFalseAction = () => {
    return async dispatch => {
        dispatch(getSubscriptionsFalseStarted())
        // setTimeout(() => {
            fetch("/users/sub/false")
                .then(res => res.json())
                .then(res => dispatch(getSubscriptionsFalseSuccess(res)))
                .catch(err => dispatch(getSubscriptionsFalseFailure(err.message)))
        // }, 200)
    }
}

const getSubscriptionsFalseStarted = () => ({
    type: GET_SUBSCRIPTIONS_FALSE_STARTED
})

const getSubscriptionsFalseSuccess = users => ({
    type: GET_SUBSCRIPTIONS_FALSE_SUCCESS,
    payload: users
})

const getSubscriptionsFalseFailure = error => ({
    type: GET_SUBSCRIPTIONS_FALSE_FAILURE,
    payload: {
        error
    }
})