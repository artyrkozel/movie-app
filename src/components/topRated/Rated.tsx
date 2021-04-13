import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIsFetchingValue, getMovieList} from "../../redux/selectors";
import {FetchMovieListAC} from "../../redux/movie-reducer";
import {MovieContainer} from "../movieContainer/MovieContainer";
import {Preloader} from "../../common/preloader/Preloader";



export const Rated = () => {
    const ratesMovie = useSelector(getMovieList)
    const dispatch = useDispatch()
    const isFetching = useSelector(getIsFetchingValue)
    const sort = 'top_rated'
    useEffect(() => {
        dispatch(FetchMovieListAC(1, sort))
    }, [dispatch])
    if(isFetching){return <Preloader />}
    return (
        <MovieContainer movie={ratesMovie} title={'Top Rated'} sort={sort}/>
    )
}