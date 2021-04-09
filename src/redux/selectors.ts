import {AppRootStateType} from "./store";

export const getMovie = (state: AppRootStateType) => {
    return  state.movie.upcomingMovie
}

export const getMovieDetails = (state: AppRootStateType) => {
    return  state.movie.movieDetail
}
export const getSearchMovie = (state: AppRootStateType) => {
    return  state.movie.search
}
export const getTrailer = (state: AppRootStateType) => {
    return  state.movie.movieTrailer
}
export const getIsFetchingValue = (state: AppRootStateType) => {
    return  state.movie.isFetching
}