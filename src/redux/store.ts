import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import movieReducer from "./movie-reducer";
import { rootWatcher } from "./sagas/sagas";

const SagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({
    movie: movieReducer
})
export type AppRootStateType = ReturnType<typeof reducers>
let store = createStore(reducers, applyMiddleware(SagaMiddleware))
SagaMiddleware.run(rootWatcher)
export default store
// @ts-ignore
window.store = store;