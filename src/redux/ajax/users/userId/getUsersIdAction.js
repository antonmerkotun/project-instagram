import {GET_USER_ID_STARTED, GET_USER_ID_SUCCESS, GET_USER_ID_FAILURE} from "../../../types";


export const getUserIdAction = (id) => {
    return async dispatch => {
        dispatch(getUserIdStarted())
            fetch(`/user/${id}`)
                .then(res => res.json())
                .then(res => dispatch(getUserIdSuccess(res)))
                .catch(err => dispatch(getUserIdFailure(err.message)))
    }
}

const getUserIdStarted = () => ({
    type: GET_USER_ID_STARTED
})

const getUserIdSuccess = data => ({
    type: GET_USER_ID_SUCCESS,
    payload: data
})

const getUserIdFailure = error => ({
    type: GET_USER_ID_FAILURE,
    payload: {
        error
    }
})