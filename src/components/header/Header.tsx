import React from "react";
import styles from './header.module.scss'
import logo from './../../common/image/logo.png'
export const Header = () => {
    return(
        <div className={styles.header}>
            <a href="#"><img src={logo} className={styles.logo} alt="logo"/></a>
        </div>
    )
}