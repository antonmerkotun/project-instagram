import {GET_USERS_STARTED, GET_USERS_SUCCESS, GET_USERS_FAILURE} from "../../types";


export const getUsers = (API) => {
    return async dispatch => {
        dispatch(getUsersStarted())
        setTimeout(() => {
            fetch(API)
                .then(res => res.json())
                .then(res => dispatch(getUsersSuccess(res)))
                .catch(err => dispatch(getUsersFailure(err.message)))
        }, 100)
    }
}

const getUsersStarted = () => ({
    type: GET_USERS_STARTED
})

const getUsersSuccess = todo => ({
    type: GET_USERS_SUCCESS,
    payload: todo
})

const getUsersFailure = error => ({
    type: GET_USERS_FAILURE,
    payload: {
        error
    }
})