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
type setMovieType = {
    type: string
    movie: any
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
export const SET_MOVIE = 'SET_MOVIE'
export const FETCH_UPCOMING_MOVIE = 'FETCH_UPCOMING_MOVIE'

export const SET_DETAILS = 'SET_DETAILS'
export const FETCH_DETAILS = 'FETCH_DETAILS'

export const FETCH_SEARCH_MOVIE = 'FETCH_SEARCH_MOVIE'
export const SET_SEARCH_MOVIE = 'SET_SEARCH_MOVIE'

export const FETCH_TRAILER = 'FETCH_TRAILER'
export const SET_TRAILER = 'SET_TRAILER'

let initialState = {
    upcomingMovie: [] as Array<movieItemType>,
    movieDetail: {} as detailsMovie,
    search: [] as Array<searchItem>,
    movieTrailer: [] as Array<movieTrailerType>
}

export const FetchMovieAC = () => {
    return {
        type: FETCH_UPCOMING_MOVIE
    }
}
export const FetchSearchMovieAC = (value: any) => {
    return {
        type: FETCH_SEARCH_MOVIE,
        value
    }
}
export const FetchTrailer = (movieId: any) => {

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
export const setMovieDetailsAC = (details: any):setMovieDetailsType => {
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
export const setMovieAC = (movie: Array<movieItemType>):setMovieType => {
    return {
        type: SET_MOVIE,
        movie
    }
}

type InitialType = typeof initialState


const movieReducer = (state: InitialType = initialState, action: any): InitialType => {
    switch (action.type) {
        case SET_MOVIE:
            return {
                ...state,
                upcomingMovie: action.movie,
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
        default:
            return state
    }
}

export default movieReducer