import {POST_COMMENTS_STARTED, POST_COMMENTS_SUCCESS, POST_COMMENTS_FAILURE} from "../../../types";

export const postCommentsAction = (idUser, idPost, value) => {
    return async dispatch => {
        dispatch(postCommentsStarted())
        fetch("/users/post/comment/add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                user: idUser,
                post: idPost,
                text: value
            })
        })
            .then(res => res.json())
            .then(res => dispatch(postCommentsSuccess(res)))
            .catch(err => dispatch(postCommentsFailure(err.message)))
    }
}

const postCommentsStarted = () => ({
    type: POST_COMMENTS_STARTED
})

const postCommentsSuccess = data => ({
    type: POST_COMMENTS_SUCCESS,
    payload: data
})

const postCommentsFailure = error => ({
    type: POST_COMMENTS_FAILURE,
    payload: {
        error
    }
})