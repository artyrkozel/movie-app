import React from "react";
import loader from './../image/preloader.gif'

export const Preloader = () => {
    return <img src={loader} alt="preloader" style={{width: '100px', position: 'absolute', top: '30%', left: '50%'}}/>
}