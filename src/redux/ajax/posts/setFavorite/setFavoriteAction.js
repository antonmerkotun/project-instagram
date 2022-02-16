import {SET_FAVORITE_STARTED, SET_FAVORITE_SUCCESS, SET_FAVORITE_FAILURE} from "../../../types";

export const setFavoriteAction = (id, favorite) => {
    return async dispatch => {
        dispatch(setFavoriteStarted())
        fetch(`/users/fav/set/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                favorite: favorite,
            })
        })
            .then(res => res.json())
            .then(res => dispatch(setFavoriteSuccess(res)))
            .catch(err => dispatch(setFavoriteFailure(err.message)))
    }
}

const setFavoriteStarted = () => ({
    type: SET_FAVORITE_STARTED
})

const setFavoriteSuccess = data => ({
    type: SET_FAVORITE_SUCCESS,
    payload: data
})

const setFavoriteFailure = error => ({
    type: SET_FAVORITE_FAILURE,
    payload: {
        error
    }
})