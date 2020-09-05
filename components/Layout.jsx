import React from 'react'
import MenuBar from './MenuBar'
import styles from "../styles/Layout.module.scss"

export default function Layout(props){
    return(
        <div className="layout">
            <MenuBar />
            

            <div className={styles.content}>
            {props.children}
            </div>
        </div>
    )}


