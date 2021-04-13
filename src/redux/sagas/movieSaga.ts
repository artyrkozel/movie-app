import {put, call, takeEvery} from 'redux-saga/effects'
import { movieApi } from '../../api/api'
import {FETCH_DETAILS, setMovieListAC, setMovieDetailsAC, FETCH_SEARCH_MOVIE, setSearchMovieAC, FETCH_TRAILER, setTrailerAC, ChangeIsFetchingValueAC, FETCH_MOVIE_lIST} from "../movie-reducer";

function* fetchMovieList(action: any) {
    yield put(ChangeIsFetchingValueAC(true))
    // @ts-ignore
    let res = yield call(() => movieApi.getMovies(action.movieId, action.sort))
    yield put(setMovieListAC(res.data.results))
    yield put(ChangeIsFetchingValueAC(false))
}

function* fetchMovieDetails(action: any){
    yield put(ChangeIsFetchingValueAC(true))
    // @ts-ignore
    let res = yield call(() => movieApi.getMovieDetails(action.movieId))
    console.log(res)
    yield put(setMovieDetailsAC(res.data))
    yield put(ChangeIsFetchingValueAC(false))
}

function* fetchSearchMovie(action: any){
    // @ts-ignore
    let res = yield call(() => movieApi.getMovieResult(action.value))
    yield put(setSearchMovieAC(res.data.results))
}
function* fetchTrailer(action: any){
    yield put(ChangeIsFetchingValueAC(true))
    // @ts-ignore
    let res = yield call(() => movieApi.getMovieTrailer(action.movieId))
    yield put(ChangeIsFetchingValueAC(false))
    yield put(setTrailerAC(res.data.results))
}

export function* requestMovieWatcher(){
    yield takeEvery(FETCH_MOVIE_lIST, fetchMovieList)
    yield takeEvery(FETCH_DETAILS, fetchMovieDetails)
    yield takeEvery(FETCH_SEARCH_MOVIE, fetchSearchMovie)
    yield takeEvery(FETCH_TRAILER, fetchTrailer)
}