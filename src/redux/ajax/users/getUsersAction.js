import {GET_USERS_STARTED, GET_USERS_SUCCESS, GET_USERS_FAILURE} from "../../types";


export const getUsers = () => {
    return async dispatch => {
        dispatch(getUsersStarted())
        // setTimeout(() => {
            fetch("/users")
                .then(res => res.json())
                .then(res => dispatch(getUsersSuccess(res)))
                .catch(err => dispatch(getUsersFailure(err.message)))
        // }, 200)
    }
}

const getUsersStarted = () => ({
    type: GET_USERS_STARTED
})

const getUsersSuccess = users => ({
    type: GET_USERS_SUCCESS,
    payload: users
})

const getUsersFailure = error => ({
    type: GET_USERS_FAILURE,
    payload: {
        error
    }
})