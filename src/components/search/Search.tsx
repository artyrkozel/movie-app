import React, {ChangeEvent, useState} from "react";
import { useHistory } from "react-router-dom";
import styles from './search.module.scss'
import {useDispatch} from "react-redux";
import { FetchSearchMovieAC } from "../../redux/movie-reducer";
import TextField from "@material-ui/core/TextField/TextField";
import {InputAdornment} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
            color: '#fff',
            '& .MuiInput-underline:before':{
                display: 'none'
            },
            '& .MuiInputBase-root': {
                color: '#fff',
                fontFamily: 'Work Sans, sans-serif'
            },
            '& .MuiInput-underline:after': {
                borderBottom: 'none',
            }
        },
    }),
);
export const Search = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const onClickHandler = () => {
        dispatch(FetchSearchMovieAC(value))
        setValue('')
        history.push('/result')
    }
    const classes = useStyles();
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <div className={styles.search}>
            <TextField
                type={'text'}
                value={value}
                onChange={onChangeHandler}
                className={classes.margin}
                id="input-with-icon-textfield"
                placeholder={'Search movie'}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon style={{color: '#fff'}}/>
                        </InputAdornment>
                    ),
                }}
            />
            <a type={'submit'} onClick={onClickHandler} className={styles.submitBtn}>Search</a>
        </div>
    )
}