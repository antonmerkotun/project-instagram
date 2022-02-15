import {GET_COMMENTS_STARTED, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE} from "../../../types";

export const getCommentsAction = () => {
    return async dispatch => {
        dispatch(getCommentsStarted())
        fetch("/comments")
            .then(res => res.json())
            .then(res => dispatch(getCommentsSuccess(res)))
            .catch(err => dispatch(getCommentsFailure(err.message)))
    }
}

const getCommentsStarted = () => ({
    type: GET_COMMENTS_STARTED
})

const getCommentsSuccess = data => ({
    type: GET_COMMENTS_SUCCESS,
    payload: data
})

const getCommentsFailure = error => ({
    type: GET_COMMENTS_FAILURE,
    payload: {
        error
    }
})