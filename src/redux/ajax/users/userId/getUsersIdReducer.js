import {GET_USER_ID_STARTED, GET_USER_ID_SUCCESS, GET_USER_ID_FAILURE} from "../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export function getUserIdReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_ID_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_USER_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {...action.payload[0]},
                error: null
            };
        case GET_USER_ID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}