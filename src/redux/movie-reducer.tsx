import {ChangeIsFetchingValueType, setMovieListType, FetchMovieListType, FetchSearchMovieType } from "./types"

type genresItem = {
    id: number,
    name: string
}
type prodCounty = {
    iso_3166_1: string
    name: string
}
export type movieItemType = {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export type detailsMovie = {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: Array<genresItem>
homepage: string
id: number
imdb_id: string
original_language: string
original_title: string
overview: string
popularity: number
poster_path: string
production_companies: any
production_countries: Array<prodCounty>
release_date: string
revenue: number
runtime: number
spoken_languages: any
status: string
tagline: string
title: string
video: boolean
vote_average: number
vote_count: number
}
type searchItem = {
    adult: boolean
    backdrop_path: string
    genre_ids: any
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
type setMovieDetailsType = {
    type: string
    details: any
}
type movieTrailerType = {
    id: string
    iso_639_1: string,
    iso_3166_1: string,
    key: string,
    name: string,
    site: string,
    size: number,
    type: string
}

export const SET_MOVIE_LIST = 'SET_MOVIE_LIST'
export const FETCH_MOVIE_lIST = 'FETCH_MOVIE_lIST'

export const SET_DETAILS = 'SET_DETAILS'
export const FETCH_DETAILS = 'FETCH_DETAILS'

export const FETCH_SEARCH_MOVIE = 'FETCH_SEARCH_MOVIE'
export const SET_SEARCH_MOVIE = 'SET_SEARCH_MOVIE'

export const FETCH_TRAILER = 'FETCH_TRAILER'
export const SET_TRAILER = 'SET_TRAILER'

export const CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING'

export const SET_MOVIE_TO_LIST = 'SET_MOVIE_TO_LIST'
export const INCREASE_COUNT = 'INCREASE_COUNT'
export const RESET_COUNT = 'RESET_COUNT'



let initialState = {
    movieList : [] as Array<movieItemType>,
    movieDetail: {} as detailsMovie,
    search: [] as Array<searchItem>,
    movieTrailer: [] as Array<movieTrailerType>,
    isFetching : false,
    watchlist: [] as Array<movieItemType>,
    watchlistCount: 0 as number
}

export const ChangeIsFetchingValueAC = (value: boolean):ChangeIsFetchingValueType => {
    return {
        type: CHANGE_IS_FETCHING,
        value
    }
}
export const FetchMovieListAC = (movieId: number, sort: string):FetchMovieListType => {
    return {
        type: FETCH_MOVIE_lIST,
        movieId,
        sort
    }
}
export const FetchSearchMovieAC = (value: string):FetchSearchMovieType => {
    return {
        type: FETCH_SEARCH_MOVIE,
        value
    }
}
export const FetchTrailer = (movieId: number) => {
    return {
        type: FETCH_TRAILER,
        movieId
    }
}
export const FetchMovieDetailsAC = (movieId: any) => {
    return {
        type: FETCH_DETAILS,
        movieId
    }
}
export const setMovieDetailsAC = (details: detailsMovie):setMovieDetailsType => {
    return {
        type: SET_DETAILS,
        details
    }

}
export const setSearchMovieAC = (result: any) => {
    return {
        type: SET_SEARCH_MOVIE,
        result
    }
}
export const setTrailerAC = (details: any) => {

    return {
        type: SET_TRAILER,
        details
    }
}
export const setMovieListAC = (movie: Array<movieItemType>): setMovieListType => {
    return {
        type: SET_MOVIE_LIST,
        movie
    }
}
export const setMovieToListAC = (movie: movieItemType) => {
    return {
        type: SET_MOVIE_TO_LIST,
        movie
    }
}
export const increaseCountAC = () => {
    return {
        type: INCREASE_COUNT,
    }
}
export const resentCountAC = () => {
    return {
        type: RESET_COUNT,
    }
}

type InitialType = typeof initialState

const movieReducer = (state: InitialType = initialState, action: any): InitialType => {
    switch (action.type) {
        case SET_MOVIE_LIST:
            return {
                ...state,
                movieList: action.movie
            }
        case SET_DETAILS:
            return {
                ...state,
                movieDetail: action.details
            }
        case SET_SEARCH_MOVIE:
            return {
                ...state,
                search: action.result
            }
        case SET_TRAILER:
            return {
                ...state,
                movieTrailer: action.details
            }
        case CHANGE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        case SET_MOVIE_TO_LIST:{
            return {
                ...state,
                watchlist: [...state.watchlist, action.movie]
            }
        }
        case INCREASE_COUNT:{
            return {
                ...state,
                watchlistCount: state.watchlistCount + 1
            }
        }
        case RESET_COUNT:{
            return {
                ...state,
                watchlistCount: state.watchlistCount = 0
            }
        }
        default:
            return state
    }
}
export default movieReducer