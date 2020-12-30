import React, { Component } from 'react'
import Layout from "../../components/Layout"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Router from "next/router"
export default class RoomCreator extends Component {
    constructor()
    {
        super();
        this.state=
        {
            Title: "",
            Desc: "",
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.submit = this.submit.bind(this);
        
    }
    
    handleTitleChange = (e) =>
    {
        if (e.target.value.match("^[a-zA-Z0-9,.!? ]*$") != null) {
            this.setState({ Title: e.target.value });
        }
    }
    handleDescChange = (e) =>
    {
        if (e.target.value.match("^[a-zA-Z0-9,.!? ]*$") != null) {
            console.log(e.target.value.length);
            document.getElementById("descriptionCount").innerHTML = (150 - e.target.value.length) + " characters remaining";
            this.setState({ Desc: e.target.value });
          }
    }
    submit = (e) =>
    {
       console.log("sending data")
        let send;
        
        e.preventDefault();
        function sendData(){
             axios.post("/api/PostRooms",{
                Title: document.getElementById("Title").value,
                Description: document.getElementById("description").value,
                
            }).catch(err =>{
              window.alert("there was an error submitting please try again!");
              return Promise.reject();
            }).then(
                response =>
                {
                    if(response.status === 201)
                    {
                      Router.push("/rooms/"+response.data)
                      
                    }
                }
            );

           
        }
         for(const prop in this.state)
            { 
                send = true;
                if(this.state[prop] === "")
                {
                    console.log("blank field")
                  window.alert("Please answer all form fields!");
                  send = false;
                  break;
                }
           
                        
              }
              if(send===true)
              {
                document.getElementById("submitButton").disabled = true;
                sendData();
              }
              if(send===false)
              {
                return;
              } 
    }
    render() {
        return (  
        <Layout>
            <div style={{marginLeft: "10%", marginRight: "10%"}}>
            <br />
        <br />
        <h1 style={{fontSize:"280%", color: "#2B2D42"}}>Room Creator</h1>
        <br/>
     
            <Form>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Title"
                      id="Title"
                      value = {this.state.Title}
                      onChange={this.handleTitleChange}
                      maxLength="25"
                      style={{width: "50%", color: "#2B2D42"}} className="inputField"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  id="description"
                  value = {this.state.Desc}
                onChange={this.handleDescChange}
                maxLength="150"
                style={{width: "50%", color: "#2B2D42"}} className="inputField"
                />
              </Form.Group>
              <div style={{float: "right"}} id="descriptionCount">
                       
                    </div>
                    <div className="buttonContainer" >
                    <Button variant="primary" type="submit" id="submitButton" onClick={(e)=>this.submit(e)}>
                    Create
                  </Button>
                  </div>
            </Form>

                
            </div>
        </Layout>
        )
    }
}

