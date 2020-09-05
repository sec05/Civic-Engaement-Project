import React from 'react'
import Layout from '../../components/Layout'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
export default function login() {
    return (
        <div>
            <Layout>
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
    )
}
