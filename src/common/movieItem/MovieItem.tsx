import React from "react";
import {NavLink} from "react-router-dom";
import styles from './movieItem.module.scss'

type MovieItemType = {
    id: number
    poster_path: string
    vote_average: number
    original_title: string
}

export const MovieItem = (props: MovieItemType) => {
    const movieImgPath = 'https://image.tmdb.org/t/p/w500/'
    return (
        <div className={styles.movieItem} key={props.id}>
            <NavLink to={'/details/'+ props.id}>
                <div className={styles.poster}>
                    <img src={movieImgPath + props.poster_path} alt="poster"/>
                    <span className={styles.voteAverage}>{props.vote_average}</span>
                </div>
            </NavLink>
            <div className={styles.filmTitle}>
                <h4>{props.original_title}</h4>
            </div>
        </div>
    )
}