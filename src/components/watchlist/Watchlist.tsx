import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { MovieItem } from "../../common/movieItem/MovieItem";
import {movieItemType, resentCountAC } from "../../redux/movie-reducer";
import {getWatchlist} from "../../redux/selectors";
import styles from './watchlist.module.scss'

export const Watchlist = () => {
    const watchList = useSelector(getWatchlist)


    let movies = watchList.reduce((acc, movie) => {
        if (acc.map[movie.id]) // если данный город уже был
            return acc; // ничего не делаем, возвращаем уже собранное
        acc.map[movie.id] = true// помечаем город, как обработанный
        acc.filteredMovies.push(movie); // добавляем объект в массив городов
        return acc; // возвращаем собранное
    }, {
        map: {} as any, // здесь будут отмечаться обработанные города
        filteredMovies: [] as Array<movieItemType> // здесь конечный массив уникальных городов
    })
        .filteredMovies; // получаем конечный массив
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resentCountAC())
    })
    return (
        <div className={styles.watchlistWr}>
            {movies.length === 0 && <div className={styles.error}>Your watch list is empty</div>}
            {movies.map((film) => <MovieItem key={film.id} film={film}/>)}
        </div>
    )
}