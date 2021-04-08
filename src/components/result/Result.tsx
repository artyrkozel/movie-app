import React from "react";
import {useSelector} from "react-redux";
import {getSearchMovie} from "../../redux/selectors";
import {MovieItem} from "../../common/movieItem/MovieItem";

export const Result = () => {
    const result = useSelector(getSearchMovie)
    return(
        <div>
            {result.map((movie) => <MovieItem key={movie.id} vote_average={movie.vote_average} poster_path={movie.poster_path} original_title={movie.original_title} id={movie.id}/>)}
        </div>
    )
}