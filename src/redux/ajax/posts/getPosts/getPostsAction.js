import {GET_POSTS_STARTED, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from "../../../types";

export const getPostsAction = () => {
    return async dispatch => {
        dispatch(getPostsStarted())
        fetch("/posts")
            .then(res => res.json())
            .then(res => dispatch(getPostsSuccess(res)))
            .catch(err => dispatch(getPostsFailure(err.message)))
    }
}

const getPostsStarted = () => ({
    type: GET_POSTS_STARTED
})

const getPostsSuccess = data => ({
    type: GET_POSTS_SUCCESS,
    payload: data
})

const getPostsFailure = error => ({
    type: GET_POSTS_FAILURE,
    payload: {
        error
    }
})