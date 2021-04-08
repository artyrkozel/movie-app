import {all} from 'redux-saga/effects'
import {requestMovieWatcher} from "./movieSaga";

export function* rootWatcher (){
    yield all([requestMovieWatcher()])
}