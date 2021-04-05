import React from "react";
import { NavLink } from "react-router-dom";
import styles from './nav.module.scss'

export const Nav = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menuList}>
                <li className={styles.menuListItem}><NavLink to={'/main'} activeClassName={styles.active}>New release </NavLink></li>
                <li className={styles.menuListItem}>
                    <NavLink to={'/trending'} activeClassName={styles.active}>Trending </NavLink>
                </li>
                <li className={styles.menuListItem}>
                    <NavLink to={'/soon'} className={styles.menuListLink} activeClassName={styles.active}>Coming Soon</NavLink>
                </li>
                <li className={styles.menuListItem}>
                    <NavLink to={'/favorite'} className={styles.menuListLink} activeClassName={styles.active}>Favorite</NavLink>
                </li>
            </ul>
        </nav>
    )
}