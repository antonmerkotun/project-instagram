import {SET_FAVORITE_STARTED, SET_FAVORITE_SUCCESS, SET_FAVORITE_FAILURE} from "../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export function setFavoriteReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FAVORITE_STARTED:
            return {
                ...state,
                loading: true
            };
        case SET_FAVORITE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...action.payload],
                error: null
            };
        case SET_FAVORITE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}