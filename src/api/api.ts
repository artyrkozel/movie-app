import axios from "axios";


export const movieApi = {
    getMovies() {
        return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=be74887c98ebed3c60c3d86b9e08ced2')
    },
    getMovieDetails(movieId: string) {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=be74887c98ebed3c60c3d86b9e08ced2`)
    },
    getMovieResult(value: string) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=be74887c98ebed3c60c3d86b9e08ced2&query=${value}`)
    },
    getMovieTrailer(movieId: string){
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=be74887c98ebed3c60c3d86b9e08ced2`)
    }
}
//https://api.themoviedb.org/3//genre/movie/list?api_key=be74887c98ebed3c60c3d86b9e08ced2
