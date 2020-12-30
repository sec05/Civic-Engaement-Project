import React from 'react'
import styles from "../styles/Notification.module.scss";
import Button from "react-bootstrap/Button";

export default function Notification(props) {
    const [fadeOut, setFade] = React.useState(0);
    const close =  async() =>
    {
        setFade(1);
        setTimeout(()=>{document.getElementById("notifContainer").classList.toggle("hidden",true)}, 400)
    }
    const closeButton = async() =>
    {

            await props.submit();
    }
    return (
        <div id="notifContainer" className={styles.notifContainer} fadeOut={fadeOut}>
            <div className={styles.notifContent}>
                {props.close === true &&
                
                    <div className={styles.close}><i  onClick={()=>close()}class="fas fa-times"></i></div>
                }
                {props.close === false &&
                    null
                }
                <div className={styles.notifText}>
                   {props.children}  
                   {props.button === true &&
                    <Button id="notifButton"className={styles.notifButton}onClick={()=>closeButton()}>{props.buttonText}</Button>
                   }
                   {props.button === false &&
                   null

                   }
                </div>
               
            </div>
            
        </div>
    )
}
