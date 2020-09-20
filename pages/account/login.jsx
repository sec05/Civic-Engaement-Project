import React from "react";
import Layout from "../../components/Layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios"

export default class login extends React.Component {
  constructor()
  {
    super();
    this.state ={
      username: "",
      password: "",
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submit = this.submit.bind(this);
  }
  submit(e)
  {
    let send;
    e.preventDefault();
    axios.post("/api/login",{
      username: this.state.username,
      password: this.state.password,
    }).catch(error=>{
      window.alert("there was an error logging in!");
      return Promise.reject();
    }).then((response)=>
    {
      if(response.status === 200)
      {
        window.location.href = "/";
      }
    })
  }
  handleUsername = (e) =>
  {
    if (e.target.value.match("^[a-zA-Z1-9]*$") != null && /\s/g.test(e.target.value) === false) {
      this.setState({ username: e.target.value });
    }
  }
  handlePassword = (e) =>
  {
    if (e.target.value.match("^[a-zA-Z1-9]*$") != null && /\s/g.test(e.target.value) === false) {
      this.setState({ password: e.target.value });
    }
  }
  render(){

  
  return (
   
    <div>
      <Layout>
        <br />
        <br />
        <h1 style={{fontSize:"280%"}}>Login</h1>
        <br/>
        <Form>
          <Form.Group >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsername} id="username" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"value={this.state.password} onChange={this.handlePassword} id="password" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e)=>this.submit(e)}>
            Login
          </Button>
        </Form>
      </Layout>
    </div>
  )
  }
}
