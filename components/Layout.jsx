import React from 'react'
import Navbar from './Navbar'

const layoutStyle = {
    display: "flex",
    //flexDirection: "column",
    height: "100%",
    width: "100%"
  };
  const contentStyle = {
    
  }
export default function Layout(props){
    return(
        <div className="layout" style={layoutStyle}>
            <Navbar />
            <div className="content" style={contentStyle}>
                {props.children}
            </div>
        </div>
    )}


