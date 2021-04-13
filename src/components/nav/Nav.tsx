import React from "react";
import { NavLink } from "react-router-dom";
import styles from './nav.module.scss'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { useSelector} from "react-redux";
import { getWatchlistCount } from "../../redux/selectors";
export const Nav = () => {
    const count = useSelector(getWatchlistCount)
    return (
        <nav className={styles.menu}>
            <ul className={styles.menuList}>
                <li className={styles.menuListItem}><NavLink to={'/main'} activeClassName={styles.active}>New release <span className={styles.listIcon}><TrendingFlatIcon/></span> </NavLink></li>
                <li className={styles.menuListItem}>
                    <NavLink to={'/trending'} activeClassName={styles.active}>Trending <span className={styles.listIcon}><TrendingFlatIcon/></span></NavLink>
                </li>
                <li className={styles.menuListItem}>
                    <NavLink to={'/rated'} className={styles.menuListLink} activeClassName={styles.active}>Top rated<span className={styles.listIcon}><TrendingFlatIcon/></span></NavLink>
                </li>
                <li className={styles.menuListItem}>
                    <NavLink to={'/watchlist'} className={styles.menuListLink} activeClassName={styles.active}>Watch List <span className={styles.count}>{count > 0 ? count : ''}</span><span className={styles.listIcon}><TrendingFlatIcon/></span></NavLink>
                </li>
            </ul>
        </nav>
    )
}