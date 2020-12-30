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
    <Layout>
    <div style={{marginLeft: "10%", marginRight: "10%"}}>
     
        <br />
        <br />
        <h1 style={{fontSize:"280%", color: "#2B2D42"}}>Login</h1>
        <br/>
        <Form>
          <Form.Group >
            <Form.Label style={{color: "#2B2D42"}}>Username</Form.Label>
            <Form.Control type="text"  style={{width: "50%", color: "#2B2D42"}} className="inputField" placeholder="Username" value={this.state.username} onChange={this.handleUsername} id="username" />
          </Form.Group>

          <Form.Group>
            <Form.Label  style={{color: "#2B2D42"}}>Password</Form.Label>
            <Form.Control type="password" className="inputField" style={{width: "50%", color: "#2B2D42"}} placeholder="Password"value={this.state.password} onChange={this.handlePassword} id="password" />
          </Form.Group>
          <div className="buttonContainer" >
            <Button variant="primary" type="submit" onClick={(e)=>this.submit(e)}>
            Login
          </Button>
          </div>
          
        </Form>
     
    </div> 
    </Layout>
  )
  }
}
