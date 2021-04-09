import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import styles from './movieItem.module.scss'
import placeholder from './../image/placeholder.png'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {FetchTrailer} from "../../redux/movie-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getTrailer} from "../../redux/selectors";
import {Preloader} from "../preloader/Preloader";

type MovieItemType = {
    id: number
    poster_path: string
    vote_average: number
    original_title: string
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);
export const MovieItem = React.memo((props: MovieItemType) => {
    console.log('render')
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const movieImgPath = 'https://image.tmdb.org/t/p/w500/'
    return (
        <div className={styles.movieItem} key={props.id}>
            <NavLink to={'/details/'+ props.id}>
                <div className={styles.poster}>
                    {props.poster_path ? <img src={movieImgPath + props.poster_path} alt="poster"/> :
                        <img src={placeholder} alt="poster"/>}
                    <span className={styles.voteAverage}>{props.vote_average}</span>
                </div>
                <h4 className={styles.filmSubTitle}>{props.original_title}</h4>
            </NavLink>
            <div className={styles.filmTitle}>
                <button type="button" onClick={handleOpen}>Trailer</button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            {/*{movieTrailer ? <iframe src={`https://www.youtube.com/embed/${movieTrailer[0].key}`} width={640} height={360} frameBorder="0">g</iframe>: <Preloader />}*/}
                        </div>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
})