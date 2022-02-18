import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import thunk from "redux-thunk";
import {routerMiddleware} from 'react-router-redux'


// export const store = createStore(rootReducer, compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ))

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.navigator.userAgent.includes('Chrome') ?
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
    ),
);