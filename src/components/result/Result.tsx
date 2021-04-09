import React from "react";
import {useSelector} from "react-redux";
import {getSearchMovie} from "../../redux/selectors";
import {MovieItem} from "../../common/movieItem/MovieItem";
import styles from './result.module.scss'
export const Result = () => {
    const result = useSelector(getSearchMovie)
    return(
        <div className={styles.resultWrapper}>
            {result.map((movie) =>
                <MovieItem key={movie.id} vote_average={movie.vote_average} poster_path={movie.poster_path} original_title={movie.original_title} id={movie.id}/>)}
        </div>
    )
}