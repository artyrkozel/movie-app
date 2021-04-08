import {put, call, takeEvery} from 'redux-saga/effects'
import { movieApi } from '../../api/api'
import {FETCH_DETAILS, FETCH_UPCOMING_MOVIE, setMovieAC, setMovieDetailsAC, FETCH_SEARCH_MOVIE, setSearchMovieAC, FETCH_TRAILER, setTrailerAC} from "../movie-reducer";

function* fetchUpcomingMovie() {
    // @ts-ignore
    let res = yield call(() => movieApi.getMovies())
    yield put(setMovieAC(res.data.results))
}

function* fetchMovieDetails(action: any){
    debugger
    // @ts-ignore
    let res = yield call(() => movieApi.getMovieDetails(action.movieId))
    yield put(setMovieDetailsAC(res.data))
}

function* fetchSearchMovie(action: any){
    // @ts-ignore
    let res = yield call(() => movieApi.getMovieResult(action.value))
    yield put(setSearchMovieAC(res.data.results))
}
function* fetchTrailer(action: any){
    // @ts-ignore
    let res = yield call(() => movieApi.getMovieTrailer(action.movieId))
    yield put(setTrailerAC(res.data.results))
}
export function* requestMovieWatcher(){
    yield takeEvery(FETCH_UPCOMING_MOVIE, fetchUpcomingMovie)
    yield takeEvery(FETCH_DETAILS, fetchMovieDetails)
    yield takeEvery(FETCH_SEARCH_MOVIE, fetchSearchMovie)
    yield takeEvery(FETCH_TRAILER, fetchTrailer)

}