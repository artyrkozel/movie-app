import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";

const SagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({

})

let store = createStore(reducers, applyMiddleware(SagaMiddleware))

export default store