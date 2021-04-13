import {movieItemType} from "./movie-reducer";


export type setMovieListType = {
    type: string
    movie: Array<movieItemType>
}

export type ChangeIsFetchingValueType = {
    type: string
    value: boolean
}

export type FetchMovieListType = {
    type: string
    movieId: number
    sort: string
}
export type FetchSearchMovieType = {
    type: string
    value: string
}