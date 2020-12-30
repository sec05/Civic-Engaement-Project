import React from "react";
import styles from "../styles/JoinableRoom.module.scss";
import Button from "react-bootstrap/Button";
import Router from "next/router";


const JoinableRoom = (props) => {
  

  
  return (
   
      <tr >
      <td className={styles.jrContainer} >
        <div className={styles.title}>
          <h1 style={{fontSize: "2.5vw"}}>{props.title} </h1><span className={styles.title}><i class="fas fa-user"></i> {props.participants}/10</span>
        </div>
        
        <div className={styles.titleDesc}>{props.desc}</div>
        <div className={styles.titleButtons}><Button onClick={() => Router.push("/rooms/"+props.id)}>Join</Button></div>
      </td>
    </tr>
  
    
    
  );
};
export default JoinableRoom;
