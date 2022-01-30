import {GET_ACCOUNT_STARTED, GET_ACCOUNT_SUCCESS, GET_ACCOUNT_FAILURE} from "../../types";


const initialState = {
    loading: false,
    account: {},
    error: null
};

export  function accountReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ACCOUNT_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_ACCOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                account: {...action.payload[0]},
                error: null
            };
        case GET_ACCOUNT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}