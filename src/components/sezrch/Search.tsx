import React, {ChangeEvent, useState} from "react";
import { useHistory } from "react-router-dom";
import styles from './search.module.scss'
import {useDispatch} from "react-redux";
import { FetchSearchMovieAC } from "../../redux/movie-reducer";

export const Search = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const onClickHandler = () => {
        dispatch(FetchSearchMovieAC(value))
        setValue('')
        history.push('/result')
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <div className={styles.search}>
            <input type="text" value={value} onChange={onChangeHandler}/>
            <button type={'submit'} onClick={onClickHandler}>Отправить</button>
        </div>
    )
}