import React from "react";
import styles from './header.module.scss'
import logo from './../../common/image/logo.png'
import { NavLink } from "react-router-dom";
export const Header = () => {
    return(
        <div className={styles.header}>
            <NavLink to="/main"><img src={logo} className={styles.logo} alt="logo"/></NavLink>
        </div>
    )
}