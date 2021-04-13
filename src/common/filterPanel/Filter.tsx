import React from "react";
import styles from './filter.module.scss'
import {FormControl, NativeSelect} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            minWidth: 120,
            backgroundColor: '#282828',
            borderRadius: '3px',
            '& .MuiNativeSelect-select.MuiNativeSelect-select': {
                padding: '10px',
                color: '#c6c6c6'
            }
        },
        selectEmpty: {
            padding: '0'
        },
        '.MuiInput-underline:before': {
            display: 'none'
        },
        input: {
            padding: '0'
        }
    }),
);

type FilterPropsType = {
    filterRatingHandler: () => void
    filterTitleHandler: () => void
    genreHandleChange: (event: React.ChangeEvent<{ value: any }>) => void
    arrOfId: Array<{id: number, name: string}>
}

export const Filter:React.FC<FilterPropsType> = ({filterRatingHandler, filterTitleHandler, genreHandleChange,arrOfId, ...props}) => {
    const classes = useStyles();
    return(
        <div className={styles.releasesNav}>
            <h3 className={styles.subTitle}>Filters</h3>
            <button onClick={filterRatingHandler} className={styles.releasesNavBtn}>Rating</button>
            <button onClick={filterTitleHandler} className={styles.releasesNavBtn}>Title</button>
            <FormControl className={classes.formControl}>
                <NativeSelect
                    onChange={genreHandleChange}
                    name="age"
                    className={classes.selectEmpty}
                >
                    {arrOfId.map((el) => <option key={el.id}>{el.name}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}