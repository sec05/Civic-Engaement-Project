import React from "react";
import Layout from "../../components/Layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {
  GoogleLoginButton,
  FacebookLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
export default function login() {
  return (
    <div>
      <Layout>
        <br />
        <br />

        <Container>
          <Row>
            <Col>
              <FacebookLoginButton />
            </Col>
            <Col>
              <GoogleLoginButton />
            </Col>
            <Col>
              <GithubLoginButton />
            </Col>
          </Row>
        </Container>
        <br />
        <hr />
        <br />
        <h1 style={{fontSize:"280%"}}>Login</h1>
        <br/>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Layout>
    </div>
  );
}
