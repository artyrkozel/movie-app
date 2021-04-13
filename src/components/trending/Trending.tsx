import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FetchMovieListAC} from "../../redux/movie-reducer";
import {getIsFetchingValue, getMovieList} from "../../redux/selectors";
import {Preloader} from "../../common/preloader/Preloader";
import {MovieContainer} from "../movieContainer/MovieContainer";

export const Trending = () => {
    const trendingMovie = useSelector(getMovieList)
    const isFetching = useSelector(getIsFetchingValue)
    const dispatch = useDispatch()
    const sort = 'popular'
    useEffect(() => {
        dispatch(FetchMovieListAC(1, 'popular'))
    }, [dispatch])
    if(isFetching){return <Preloader />}
    return(
        <MovieContainer movie={trendingMovie} title={'Trending'} sort={sort}/>
    )
}