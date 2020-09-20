import React from 'react'
import MenuBar from './MenuBar'
import styles from "../styles/Layout.module.scss"
import jsCookie from 'js-cookie';
export default class Layout extends React.Component{
    constructor(props)
    {
        super(props);
        this.usernameInfo;
        if(jsCookie.get("username") === undefined)
        {
            this.usernameInfo = "Sign In!"
        }
        else
        {
            this.usernameInfo = jsCookie.get("username");
        }
        console.log(this.usernameInfo);
    }
      render()
      {
        return(
                
                <div className="layout">
                    <MenuBar username={this.usernameInfo}></MenuBar>
                    

                    <div className={styles.content}>
                    {this.props.children}
                    </div>
                </div>
            )
      }
    
}


