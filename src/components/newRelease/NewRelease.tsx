import React, {useEffect, useState} from "react";
import styles from './releases.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {FetchMovieAC, setMovieAC, movieItemType} from "../../redux/movie-reducer";
import {getMovie} from "../../redux/selectors";
import {MovieItem} from "../../common/movieItem/MovieItem";

export const Releases = () => {
    const movie = useSelector(getMovie)
    console.log(movie)
    const arrOfId = [
        {id: 28, name: "Action"},
        {id: 12, name: "Adventure"},
        {id: 16, name: "Animation"},
        {id: 35, name: "Comedy"},
        {id: 80, name: "Crime"},
        {id: 99, name: "Documentary"},
        {id: 18, name: "Drama"},
        {id: 10751, name: "Family"},
        {id: 14, name: "Fantasy"},
        {id: 36, name: "History"},
        {id: 27, name: "Horror"},
        {id: 10402, name: "Music"},
        {id: 9648, name: "Mystery"},
        {id: 10749, name: "Romance"},
        {id: 878, name: "Science Fiction"},
        {id: 10770, name: "TV Movie"},
        {id: 53, name: "Thriller"},
        {id: 10752, name: "War"},
        {id: 37, name: "Western"}
    ]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchMovieAC())
    }, [dispatch])

    const compareIds = (genreId: number) => {
        const newArr = [] as Array<movieItemType>
        movie.map(el => {
            if (el.genre_ids.includes(genreId)){
                newArr.push(el)
            }
        })
        console.log(newArr)
        return newArr
    }
    const genreHandleChange = (event: React.ChangeEvent<{ value: any }>) => {
        arrOfId.map((el) => {
            if (el.name === event.target.value){
                let id = el.id
                compareIds(id)
            }
        })
    }

    let filterByRating = (movie: Array<movieItemType>) => {
        let ret = movie.slice().sort(function (a,b){
            return a.vote_average - b.vote_average
        })
        return ret.reverse()
    }
    let filterByName = (movie: Array<movieItemType>) => movie.slice().sort((a,b) => b.original_title.toLowerCase().localeCompare(a.original_title.toLowerCase()))

    const filterRatingHandler = () => dispatch(setMovieAC(filterByRating(movie)))
    const filterTitleHandler = () => dispatch(setMovieAC(filterByName(movie)))
    //const [value, setValue] = useState(80)
    return (
        <div className={styles.releases}>
            <h2 className={styles.mainTitle}>New Releases</h2>
            <h3>filtered by</h3>
            <button onClick={filterRatingHandler}>Rating</button>
            <button onClick={filterTitleHandler}>Title</button>
            <select onChange={genreHandleChange}>
                {arrOfId.map((el) => <option key={el.id}>{el.name}</option>)}
            </select>
            <div className={styles.releasesInner}>
                {movie.map((film) => <MovieItem id={film.id} original_title={film.original_title} poster_path={film.poster_path} vote_average={film.vote_average}/>)}
            </div>
        </div>
    )
}