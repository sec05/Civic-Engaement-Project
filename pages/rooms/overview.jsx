import Layout from "../../components/Layout";
import RoomBar from "../../components/RoomBar";
import InfoWidget from "../../components/InfoWidget"
import JoinableRoom from "../../components/JoinableRoom"
import axios from "axios";
import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
import Loader from "react-loader-spinner"
const fetchRooms = async() =>
{
  ReactDOM.render(<tbody><tr style={{width:"100%", textAlign:"center"}}><Loader type="TailSpin"color="#000000"height={100}width={100}/></tr><tr style={{width:"100%", textAlign:"center"}}><h2>Loading...</h2></tr></tbody>	,document.getElementById("roomsTable"))
  var rooms;
  
 await axios.get("/api/GetRooms")
  .then((response) =>{
   rooms= response.data;
   
  }).then(()=>{
    
   const gottenRooms = rooms.map((room, index) =>{
     
    return(
    <JoinableRoom desc={room.Description} title={room.Title} key={room._id} id = {room._id} participants = {room.participants}></JoinableRoom>
    );
   })
  ReactDOM.render(<tbody>{gottenRooms}</tbody>,document.getElementById("roomsTable"));
    }).catch(error => console.log(error));
  
  
}

const Rooms = () => {
  useEffect(()=>{
    fetchRooms();
  },[])
  return (
    <div>
      <Layout>
        <br />
        <div className="roomContainer">
          <div className="roomBar">
            <RoomBar refresh={fetchRooms}></RoomBar><br/>
            
            <table className="tableJR" id="roomsTable">
             
            </table>
          </div>
          
          <InfoWidget></InfoWidget>
        </div>
      </Layout>
    </div>
  );
};

export default Rooms;
