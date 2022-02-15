import {GET_ACCOUNT_STARTED, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_FAILURE} from "../../types";

export const getAccount = () => {
    return async dispatch => {
        dispatch(getAccountStarted())
        // setTimeout(() => {
            fetch("/account")
                .then(res => res.json())
                .then(res => dispatch(getAccountSuccess(res)))
                .catch(err => dispatch(getAccountFailure(err.message)))
        // }, 200)
    }
}

const getAccountStarted = () => ({
    type: GET_ACCOUNT_STARTED
})

const getAccountSuccess = account => ({
    type: GET_ACCOUNT_SUCCESS,
    payload: account
})

const getAccountFailure = error => ({
    type: GET_ACCOUNT_FAILURE,
    payload: {
        error
    }
})