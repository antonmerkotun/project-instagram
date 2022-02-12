import {GET_SUBSCRIPTIONS_TRUE_STARTED, GET_SUBSCRIPTIONS_TRUE_SUCCESS, GET_SUBSCRIPTIONS_TRUE_FAILURE} from "../../../../types";

export const getSubscriptionsTrueAction = (API) => {
    return async dispatch => {
        dispatch(getSubscriptionsTrueStarted())
        // setTimeout(() => {
            fetch(API)
                .then(res => res.json())
                .then(res => dispatch(getSubscriptionsTrueSuccess(res)))
                .catch(err => dispatch(getSubscriptionsTrueFailure(err.message)))
        // }, 200)
    }
}

const getSubscriptionsTrueStarted = () => ({
    type: GET_SUBSCRIPTIONS_TRUE_STARTED
})

const getSubscriptionsTrueSuccess = users => ({
    type: GET_SUBSCRIPTIONS_TRUE_SUCCESS,
    payload: users
})

const getSubscriptionsTrueFailure = error => ({
    type: GET_SUBSCRIPTIONS_TRUE_FAILURE,
    payload: {
        error
    }
})