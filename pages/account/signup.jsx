import React from "react";
import Layout from "../../components/Layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default class signup extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      Username: "",
      Password: "",
      PasswordConf: "",

    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfChange = this.handlePasswordConfChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    document.getElementById("submitButton").disabled = true;
    let send;
    e.preventDefault();
    function sendData() {
      
          axios
        .post("/api/signup", {
          Firstname: document.getElementById("FirstName").value,
          Lastname: document.getElementById("LastName").value,
          username: document.getElementById("username").value,
          password: document.getElementById("password").value,
        })
        .catch((err) => {
          window.alert("there was an error submitting please try again!");
          return Promise.reject();
        })
        .then(async (response) => {
          if ((response.status = 201)) {
            axios
              .post("/api/sessions", {
                username: document.getElementById("username").value,
              })
              .catch((err) => {
                document.getElementById("submitButton").disabled = false;
                window.alert("there was an error submitting please try again!");
                return Promise.reject();
              })
              .then((window.location.href = "/"));
          }
        })
 
    }
    if (this.state.Password === this.state.PasswordConf) {
      if (this.state.Password.length >= 5) {
        for (const prop in this.state) {
          send = true;
          console.log(this.state[prop]);
          if (this.state[prop] === "") {
            
            window.alert("Please answer all form fields!");
            send = false;
            document.getElementById("submitButton").disabled = false;
            break;
          }
        }
        if (send === true) {
          sendData();
        }
        if (send === false) {
          return;
        }
      } else {
        window.alert("Password length must be longer than 5 characters!");
        document.getElementById("submitButton").disabled = false;
      }
    } else {
      window.alert("Passwords do not match!");
      document.getElementById("submitButton").disabled = false;
    }
  }
  handleFirstNameChange =async (e) => {
    
    if (
      e.target.value.match("^[a-zA-Z ]*$") != null &&
      /\s/g.test(e.target.value) === false
    ) {
     await this.setState({ FirstName: e.target.value });
    }
  };
  handleLastNameChange =async (e) => {
   
    if (
      e.target.value.match("^[a-zA-Z-]*$") != null &&
      /\s/g.test(e.target.value) === false
    ) {
      await this.setState({ LastName: e.target.value });
    }
  };
  handleUsernameChange = async (e) => {
    if (
      e.target.value.match("^[a-zA-Z0-9]*$") != null &&
      /\s/g.test(e.target.value) === false
    ) {
    await  this.setState({ Username: e.target.value });
    }
  };
  handlePasswordChange = async (e) => {
    
    if (
      e.target.value.match("^[a-zA-Z0-9]*$") != null &&
      /\s/g.test(e.target.value) === false
    ) {
      await this.setState({ Password: e.target.value });

      if (this.state.PasswordConf != "") {
        if (this.state.PasswordConf === this.state.Password) {
          document.getElementById("errMessage").classList = "hidden";
        }
        if (this.state.PasswordConf != this.state.Password) {
          document.getElementById("errMessage").classList = "";
        }
      }
      console.log(this.state.Password);
    }
  };
  handlePasswordConfChange = async (e) => {
 
    if (
      e.target.value.match("^[a-zA-Z0-9]*$") != null &&
      /\s/g.test(e.target.value) === false
    ) {
     await this.setState({ PasswordConf: e.target.value });

      if (this.state.PasswordConf === this.state.Password) {
        document.getElementById("errMessage").classList = "hidden";
      }
      if (this.state.PasswordConf != this.state.Password) {
        document.getElementById("errMessage").classList = "";
      }
    }

  };

  render() {
    return (
      <Layout>
        <div style={{ marginLeft: "10%", marginRight: "50%" }}>
          <h1>Sign Up</h1>

            <Form>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      id="FirstName"
                      value={this.state.FirstName}
                      onChange={this.handleFirstNameChange}
                      className="inputField"
                    />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      id="LastName"
                      value={this.state.LastName}
                      onChange={this.handleLastNameChange}
                      className="inputField"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  id="username"
                  value={this.state.Username}
                  onChange={this.handleUsernameChange}
                  className="inputField"
                />
              </Form.Group>

              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      id="password"
                      value={this.state.Password}
                      onChange={this.handlePasswordChange}
                      className="inputField"
                    />
                  </Col>
                  <Col>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      id="confpassword"
                      value={this.state.PasswordConf}
                      onChange={this.handlePasswordConfChange}
                      className="inputField"
                    />
                    <div
                      style={{ color: "red" }}
                      className="hidden"
                      id="errMessage"
                    >
                      Passwords do not match!
                    </div>
                  </Col>
                </Row>
              </Form.Group>
<div className="buttonContainer">
   <Button
                variant="primary"
                type="submit"
                onClick={(e) => this.submit(e)}
                id="submitButton"
              >
                Sign Up
              </Button>
</div>
             
            </Form>

        </div>
      </Layout>
    );
  }
}
