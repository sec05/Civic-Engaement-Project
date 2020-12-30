import React, { useEffect, useState } from "react";
import styles from "../styles/RIDChat.module.scss";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ReactDOM from "react-dom";
import io from "socket.io-client";
import useUser from "../utils/userCheck";
export default function RIDChat(props) {
  const socket = io("http://localhost:4000", { transports: ["websocket"] });
  const [participants, setParticipants] = useState(props.users);
  const { user, mutateUser } = useUser();
  const Fname = user?.firstname;
  const Lname = user?.lastname;
  let allMessages = {};
  let people = props.users;

    socket.on("join", () => {
      console.log(" a user joined the chat");
      people++;
      setParticipants(people);
    });
    socket.on("message", (data) => {
      console.log("recieved message");
    });
  const messageInput = (e) => {
    if (e.key === "Enter") {
      socket.emit("message", {
        message: e.target.value,
        name: Fname + " " + Lname,
        id: props.id,
        own: 2,
      });
    console.log("send message to server")
      var element = document.getElementById("messages");
      element.scrollTop = element.scrollHeight;
    }
  };
  return (
    <div className={styles.container}>
      <h2
        style={{
          textAlign: "left",
          marginLeft: "5%",
          marginRight: "5%",
          fontSize: "1.7vw",
        }}
      >
        Chat{" "}
        <div style={{ float: "right", display: "inline" }}>
          <div style={{ display: "inline" }} id="users">
            {participants}
          </div>
          /10&nbsp;<i class="fas fa-user-friends"></i>
        </div>
      </h2>
      <div className={styles.chatBox}>
        <div id="messages" style={{ position: "relative" }}></div>
      </div>
      <InputGroup className="mb-3 " className={styles.inputMessage}>
        <FormControl
          placeholder="Press Enter to Send"
          aria-label="Press Enter to Send"
          aria-describedby="basic-addon2"
          className="inputField"
          autoComplete="off"
          id="messageInput"
          onKeyUp={messageInput}
          style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
        />
      </InputGroup>
    </div>
  );
}
