import axios from "axios";
import { movieItemType } from "../redux/movie-reducer";


export const movieApi = {
    getMovies(page: number, sort: string) {
        return axios.get<ResponseType<dataType>>(`https://api.themoviedb.org/3/movie/${sort}?api_key=be74887c98ebed3c60c3d86b9e08ced2&page=${page}`)
    },
    getMovieDetails(movieId: string) {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=be74887c98ebed3c60c3d86b9e08ced2`)
    },
    getMovieResult(value: string) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=be74887c98ebed3c60c3d86b9e08ced2&query=${value}`)
    },
    getMovieTrailer(movieId: string) {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=be74887c98ebed3c60c3d86b9e08ced2`)
    }

}

type dataType = {
    dates : {maximum: string, minimum: string}
    page: number
    results: Array<movieItemType>
    total_pages: number
    total_results: number
}

export type ResponseType<D> = {
    config: any
    data: D
    headers: any
    request: any
    status: number
    statusText: string
}