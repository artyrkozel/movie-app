import React, {useState} from "react";
import styles from "../newRelease/releases.module.scss";
import {Filter} from "../../common/filterPanel/Filter";
import {MovieItem} from "../../common/movieItem/MovieItem";
import {FetchMovieListAC, movieItemType, setMovieListAC} from "../../redux/movie-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getIsFetchingValue} from "../../redux/selectors";
import {Preloader} from "../../common/preloader/Preloader";
import Pagination from "@material-ui/lab/Pagination";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

type MovieContainerType = {
    movie: Array<movieItemType>
    title: string,
    sort: string
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiPagination-ul':{
                display: 'flex',
                justifyContent: 'center'
            },
            '& .MuiPaginationItem-root': {
                color: '#fff',

            },
            '& .MuiPaginationItem-page:hover': {
                backgroundColor: '#8300ff'
            },
            '& .MuiPaginationItem-page.Mui-selected': {
                backgroundColor: '#8300ff'
            },
        }}),);
export const MovieContainer: React.FC<MovieContainerType> = (({movie, title, sort}) => {
    const classes = useStyles();
    const isFetching = useSelector(getIsFetchingValue)
    const dispatch = useDispatch()

    const [id, setId] = useState<number | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const filteredArr = movie.filter(el => id !== null? el.genre_ids.includes(id) : el)
    const genreHandleChange = (event: React.ChangeEvent<{ value: any }>) => arrOfId.map((el) => el.name === event.target.value ? setId(el.id) : '')
    const filterRatingHandler = () => dispatch(setMovieListAC(filterByRating(movie)))
    const filterTitleHandler = () => dispatch(setMovieListAC(filterByName(movie)))
    let filterByRating = (movie: Array<movieItemType>) => movie.slice().sort(function (a,b){return a.vote_average - b.vote_average}).reverse()
    let filterByName = (movie: Array<movieItemType>) => movie.slice().sort((a,b) => b.original_title.toLowerCase().localeCompare(a.original_title.toLowerCase())).reverse()
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
    const onChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
        dispatch(FetchMovieListAC(page, sort))
    }
    if(isFetching){return <Preloader />}
    return (
            <div className={styles.releases}>
                <div className={styles.mainTitle}>
                    <h2>{title}</h2>
                    <h3>{title}</h3>
                </div>
                <Filter filterRatingHandler={filterRatingHandler} filterTitleHandler={filterTitleHandler} genreHandleChange={genreHandleChange} arrOfId={arrOfId}/>
                <div className={styles.releasesInner}>
                    {filteredArr.length === 0 && <div>No results</div>}
                    {filteredArr.map((film) => <MovieItem key={film.id} film={film}/>)}
                </div>
                <Pagination count={10} shape="rounded" onChange={onChange} page={currentPage} className={classes.root}/>
            </div>
    )
})