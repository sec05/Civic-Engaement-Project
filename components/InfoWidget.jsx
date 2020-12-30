import useUser from "../utils/userCheck";
import styles from "../styles/infoWidget.module.scss"
import {useEffect} from "react";
import axios from "axios"

const InfoWidget =  () =>
{
    const { user, mutateUser } = useUser();
    const username =  user?.username;
   console.log(username, "username");
    async function updateStats()
    {
        await axios.post("/api/GetUserStats",{username: username}).then((response)=>document.getElementById("numberOfCallsUser").innerHTML=response.data)
    }

    updateStats();
    return(
        <div className={styles.infoWidgetContainer}>
            <div className={styles.infoWidgetUsername}>
                <i style={{fontSize: "2vw"}} class="fas fa-user-circle infoWidgetIcon" ></i>
                <h1 style={{fontSize: "2vw"}}>{user?.username}</h1>
            </div>
            <table className={styles.infoWidgetData}>
                <tbody>
                    <tr>
                        <td style={{width: "50%", float: "left"}}><h1 style={{fontSize: "2vw"}}>Calls: </h1></td><td style={{width: "50%", textAlign: "right"}} ><h1 style={{fontSize: "2vw"}}id="numberOfCallsUser"></h1></td>
                    </tr>
                </tbody>
            </table>
            
           
        </div>
    )
    
}
export default InfoWidget;