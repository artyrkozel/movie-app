import {AppRootStateType} from "./store";

export const getMovieList = (state: AppRootStateType) => {
    return  state.movie.movieList
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
export const getWatchlist = (state: AppRootStateType) => {
    return  state.movie.watchlist
}
export const getWatchlistCount = (state: AppRootStateType) => {
    return  state.movie.watchlistCount
}