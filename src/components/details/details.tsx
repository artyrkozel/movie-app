import React, {useEffect} from "react";
import styles from './details.module.scss'
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FetchMovieDetailsAC, FetchTrailer} from "../../redux/movie-reducer";
import {getIsFetchingValue, getMovieDetails, getTrailer} from "../../redux/selectors";
import {Preloader} from "../../common/preloader/Preloader";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export const Details = () => {
    const {id} = useParams<{ id: any }>()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchMovieDetailsAC(id))
        dispatch(FetchTrailer(id))
    },[dispatch, id])
    const movieDetails = useSelector(getMovieDetails)
    const movieTrailer = useSelector(getTrailer)
    const isFetching = useSelector(getIsFetchingValue)
    const trailer = movieTrailer[0]
    console.log(trailer)
    const movieImgPath = 'https://image.tmdb.org/t/p/w500/'
    if(isFetching){return <Preloader />}
    return (
        <div className={styles.movieItem}>
            <div className={styles.movieItemInner}>
                <div>
                    <div className={styles.moviePoster}>
                        <img src={movieImgPath+ movieDetails.poster_path} alt=""/>
                    </div>
                    <div className={styles.listDetails}>
                        <div className={styles.listDetailsItem}>
                            <p>Category:</p>
                            {movieDetails.genres?.map((el) => {
                                return <button key={el.id} style={{marginRight: '5px'}}>{el.name}</button>
                            })}
                        </div>
                        <div className={styles.listDetailsItem}>
                            <p>Relies Date:</p>
                            <span>{movieDetails.release_date}</span>
                        </div>
                        <div className={styles.listDetailsItem}>
                            <p>Length:</p>
                            <span>{movieDetails.runtime}</span>
                        </div>
                        <div className={styles.listDetailsItem}>
                            <p>County:</p>
                            {/*{movieDetails && <span>{movieDetails?.production_countries[0]?.name}</span>}*/}
                        </div>
                    </div>
                </div>
                <div className={styles.movieInfo}>
                    <h2>{movieDetails.title}</h2>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="half-rating" defaultValue={movieDetails.vote_average} precision={0.1} readOnly max={10}/>
                    </Box>
                    <div className={styles.voteStatistics}>
                        <div className={styles.voteAverage}>
                            <span className={styles.as}>{movieDetails.vote_average}</span>
                            <span>IMDb</span>
                        </div>
                        <div className={styles.voteAverage}>
                            <span className={styles.as}>{movieDetails.vote_count}</span>
                            <span>Vote Count</span>
                        </div>
                        <div className={styles.voteAverage}>
                            <span className={styles.as}>{movieDetails.budget}</span>
                            <span>Budget</span>
                        </div>
                    </div>

                    <div className={styles.storyLine}>
                        <p>{movieDetails.overview}</p>
                    </div>
                    <div className={styles.trailerItem}>
                        <h2>Trailer</h2>
                        {/*<iframe src={`https://www.youtube.com/embed/${trailer.key}`} width={640} height={360} frameBorder="0"></iframe>*/}
                    </div>

                </div>

            </div>

        </div>
    )
}
