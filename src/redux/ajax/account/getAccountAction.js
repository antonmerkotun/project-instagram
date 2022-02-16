import {GET_ACCOUNT_STARTED, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_FAILURE} from "../../types";

export const getAccount = () => {
    return async dispatch => {
        dispatch(getAccountStarted())
            fetch("/account")
                .then(res => res.json())
                .then(res => dispatch(getAccountSuccess(res)))
                .catch(err => dispatch(getAccountFailure(err.message)))
    }
}

const getAccountStarted = () => ({
    type: GET_ACCOUNT_STARTED
})

const getAccountSuccess = data => ({
    type: GET_ACCOUNT_SUCCESS,
    payload: data
})

const getAccountFailure = error => ({
    type: GET_ACCOUNT_FAILURE,
    payload: {
        error
    }
})