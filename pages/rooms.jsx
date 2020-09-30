import Layout from "../components/Layout";
import RoomBar from "../components/RoomBar";
import RoomsRefresh from "../components/RoomsRefresh";
import InfoWidget from "../components/InfoWidget"
const Rooms = () => {
  return (
    <div>
      <Layout>
        <br />
        <div className="roomContainer">
          <div className="roomBar">
            <RoomBar></RoomBar><br/>
            
            <table style={{width: "100%" }}>
              <row><h1 style={{backgroundColor: "red"}}>hi</h1></row>
            </table>
          </div>
          
          <InfoWidget></InfoWidget>
        </div>
      </Layout>
    </div>
  );
};

export default Rooms;
