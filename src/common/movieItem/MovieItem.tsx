import React from "react";
import {NavLink} from "react-router-dom";
import styles from './movieItem.module.scss'
import placeholder from './../image/placeholder.png'
import {increaseCountAC, movieItemType, setMovieToListAC} from "../../redux/movie-reducer";
import {useDispatch} from "react-redux";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

type filmItem = {
    film: movieItemType
}

export const MovieItem: React.FC<filmItem> = React.memo(({film}) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const dispatch = useDispatch()
    const onClickHandler = (film: movieItemType) => {
        setOpen(true)
        dispatch(setMovieToListAC(film))
        dispatch(increaseCountAC())
    }

    const movieImgPath = 'https://image.tmdb.org/t/p/w500/'
    return (
        <div className={styles.movieItem} key={film.id}>
            <NavLink to={'/details/'+ film.id}>
                <div className={styles.poster}>
                    {film.poster_path ? <img src={movieImgPath + film.poster_path} alt="poster"/> :
                        <img src={placeholder} alt="poster"/>}
                    <span className={styles.voteAverage}>{film.vote_average}</span>
                </div>
                <span className={styles.span}><PlayCircleFilledWhiteIcon style={{fontSize: '80px', color: '#8300ff', border: 'none'}}/></span>
            </NavLink>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px', alignItems: 'center'}}>
                <h4 className={styles.filmSubTitle}>{film.original_title}</h4>
                <button disabled={open} onClick={() => onClickHandler(film)} className={styles.watchBtn}><BookmarkBorderIcon /></button>
            </div>
        </div>
    )
})