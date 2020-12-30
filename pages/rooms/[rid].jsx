import Layout from "../../components/Layout";
import axios from "axios";
import styles from "../../styles/[rid].module.scss";
import InfoWidgetRID from "../../components/InfoWidgetRID";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ContentLoader from "react-content-loader";
import useUser from "../../utils/userCheck";
import Notification from "../../components/Notification";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link"
import RIDChat from "../../components/RIDChat"
import { Button } from "react-bootstrap";
import Router from "next/router"
const room = ({ roomData }, props) => {
  const { user, mutateUser } = useUser();
  const Fname = user?.firstname;
  const Lname = user?.lastname;
  const copyLink = () => {
    navigator.clipboard.writeText("/rooms/" + roomData._id);
  };
  useEffect(() => {
if (roomData.participants > 10) {
      axios
        .post(
          "/api/UpdateParticipants",
          {
            id: roomData._id,
            change: "leave",
          },
        
        )
        .catch((error) => console.log(error))
        .then(() => {
          Router.push("/rooms/overview");
        });
    }
if (roomData.participants < 10) {
      GetNewPB();


}
  }, []);

  const GetNewPB = async () => {
    await ReactDOM.render(
      <ContentLoader
        speed={4}
        width={350}
        height={90}
        viewBox="0 0 350 100"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="8" rx="3" ry="3" width="350" height="30" />
        <rect x="0" y="45" rx="3" ry="3" width="250" height="25" />
        <rect x="0" y="75" rx="3" ry="3" width="250" height="25" />
      </ContentLoader>,
      document.getElementById("contact")
    );
    await axios
      .get("/api/GetPhonebanker")
      .then((response) => {
        document.getElementById("name").innerHTML = response.data.name;
        ReactDOM.render(
          <div>
            <h1>{(response.data.name).toLowerCase()}</h1>
            <h4>{response.data.info}</h4>
            <h4>{response.data.phone}</h4>
          </div>,
          document.getElementById("contact")
        );
      })
      .catch((error) => {
  
        ReactDOM.render(
          <Notification close={true}>
            <h1>
              The ROV phonebanks are closed or are not working! Try again later!
            </h1>
          </Notification>,
          document.getElementById("notifDiv")
        );
      });
  };
  const userPBRes = (response = Number) => {
    if (response === 1) {
      ReactDOM.render(<h3>You can check your registration status online at <Link href="//www.mvp.sos.ga.gov"><a >www.mvp.sos.ga.gov</a></Link> , or by calling the DeKalb County Elections Office at (404) 371-2000.</h3>, document.getElementById("contactResScript"));
    }
    if (response === 2) {
      ReactDOM.render(<h3>Thank you for taking the time to speak with me today.</h3>, document.getElementById("contactResScript"));
    }
    if (response === 3) {
      ReactDOM.render(<h3>Our list shows that you may be unregistered in Georgia. If you recently moved or haven't voted in the past several elections, or even if you have voted recently, you may have been moved to unregistered status. Would you be willing to check? (Go to Yes or No)</h3>, document.getElementById("contactResScript"));
    }
    if (response === 4) {
      ReactDOM.render(<h3>Hi, my name is {Fname + " " + Lname} and I am a volunteer for Reclaim Our Vote. This message is for [voter name].

        According to the state voter file, you might no longer be registered to vote in Georgia. If you would like to vote in the upcoming Senate runoff election on January 5, you need to register by December 7th.
        
        You can check your registration status and register or re-register if necessary by visiting the website www.mvp.sos.ga.gov, or by calling the DeKalb County Elections Office at (404) 371-2000.
        
        Please note that you are NOT officially registered until you receive a voter precinct card in the mail.
        If you do not receive your precinct card before December 7, please call your county registrar.
        
        Thanks and have a great day.</h3>, document.getElementById("contactResScript"));
    }
   
  };
  return (
    <Layout>
      <div id="notifDiv"></div>

      <div className={styles.ridContainer}>
        <div className={styles.ridData}>
          <h1>
            {roomData.Title}<div className="buttonContainer" style={{display : "inline !important", float: "right"}}><Button onClick={()=>GetNewPB()}>New Contact</Button></div>
          </h1>
          <div className={styles.ridLink}>
            <h1>{roomData._id}</h1>
            <div className={styles.ridLinkCopyDiv} onClick={() => copyLink()}>
              <i class="fas fa-link"></i>
            </div>
            <div className={styles.contact}>
              <div id="contact"></div>
              <div className={styles.scriptcontainer}>
                <h3>
                  Hi, Is <h3 style={{ display: "inline" }} id="name"></h3>{" "}
                  available? My name is {Fname + " " + Lname} and I'm a
                  volunteer for Reclaim Our Vote a non-partisan voting rights
                  organization. According to the state voter file, you might no
                  longer be registered to vote. Georgia has a crucial runoff
                  election on January 5, 2021 If you would like to vote in this
                  election, you need to register by December 7th. Would you like
                  to check your registration status?
                </h3>
                <br />
                <div>
                  <DropdownButton
                    id="contactRes"
                    title="Choose an Option"
                    disabled={false}
                    className={styles.dropdownButton}
                  >
                   

                    <Dropdown.Item onClick={() => userPBRes(1)}>
                      Yes
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => userPBRes(2)}>
                      No
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => userPBRes(3)}>
                      Already Registered
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => userPBRes(4)}>
                      Voicemail
                    </Dropdown.Item>
          
                  </DropdownButton>
                </div>

                <br />
                <div id="contactResScript"className={styles.scriptcontainer}></div>
              </div>
            </div>
          </div>
        </div>
        <table className={styles.widgetTable}>
          <tbody>
            <tr>
              <td>
                <InfoWidgetRID></InfoWidgetRID>
              </td>
            </tr>
            <tr>
              <td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
export async function getStaticProps({ params }) {
  let roomData;
  await axios
    .post(
      "/api/UpdateParticipants",
      {
        id: params.rid,
        change: "join",
      },
      
    )
    .catch((error) => console.log(error));
  await axios
    .post(
      "/api/GetOneRoom",
      {
        path: params.rid,
      },
      
    )
    .then((response) => (roomData = response.data))
    .catch((error) => console.log(error));
  return {
    props: {
      roomData,
    },
  };
}
export async function getStaticPaths() {
  var paths;
  await axios
    .get("/api/RoomIds")
    .then((response) => {
      paths = response.data;
    }).catch(error=>console.log(error));

  return {
    paths,
    fallback: false,
  };
}
export default room;
