import React from "react";
import {useSelector} from "react-redux";
import {getSearchMovie} from "../../redux/selectors";
import {MovieItem} from "../../common/movieItem/MovieItem";
import styles from './result.module.scss'
import noResultsImg from './../../common/image/noResults.png'
export const Result = () => {
    const result = useSelector(getSearchMovie)
    return(
        <div className={styles.resultWrapper}>
            {result.length === 0 ? <img  className={styles.noResultsImg} src={noResultsImg} alt="noResults"/> : ''}
            {result.map((movie) =>
                <MovieItem key={movie.id} film={movie}/>)}
        </div>
    )
}