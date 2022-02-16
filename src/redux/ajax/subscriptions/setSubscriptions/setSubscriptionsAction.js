import {SET_SUBSCRIPTIONS_STARTED, SET_SUBSCRIPTIONS_SUCCESS, SET_SUBSCRIPTIONS_FAILURE} from "../../../types";

export const setSubscriptionsAction = (id, value) => {
    return async dispatch => {
        dispatch(setSubscriptionsStarted())
        fetch(`/users/sub/set/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "subscriptions": value
            })
        })
            // .then(res => res.json())
            .then(res => dispatch(setSubscriptionsSuccess(res)))
            .catch(err => dispatch(setSubscriptionsFailure(err.message)))
    }
}

const setSubscriptionsStarted = () => ({
    type: SET_SUBSCRIPTIONS_STARTED
})

const setSubscriptionsSuccess = data => ({
    type: SET_SUBSCRIPTIONS_SUCCESS,
    payload: data
})

const setSubscriptionsFailure = error => ({
    type: SET_SUBSCRIPTIONS_FAILURE,
    payload: {
        error
    }
})


