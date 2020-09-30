import React from "react";
import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import useUser from "../helpers/userCheck";
import fetchJson from "../helpers/fetchJson";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.scss"
const NavBar = () => {
  const router = useRouter();
  const { user, mutateUser } = useUser();

  let name = user?.username;
  if (name === undefined) {
    name = "Sign In!";
  }
  return (
    <div style={{ borderBottom: "1px solid black" }}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        />
      </Head>

      <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Navbar.Brand>
          <Link href="/">React Bootstrap Navbar</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {user?.isLoggedIn && (
              <Nav>
                <Nav.Link>
                  <Link href="/rooms">Rooms</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link href="/account/profile">Create Room</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link href="/account/profile">Profile</Link>
                </Nav.Link>
              </Nav>
            )}
          </Nav>
          {user?.isLoggedIn && (
            <Nav >
              <NavDropdown title={name} alignRight>
                <NavDropdown.Item onClick={async (e) => {
                    e.preventDefault();
                    await mutateUser(fetchJson("/api/logout"));
                    router.push("/");
                }}>
                  Sign Out
                </NavDropdown.Item>
             
               
              </NavDropdown>
            </Nav>
          )}
          {!user?.isLoggedIn && (
            <Nav>
              <Nav.Item>
                <Nav.Link className="mr-4">
                <Link href="/account/login">Log in</Link>
              </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="">
                <Link href="/account/signup">Sign up</Link>
              </Nav.Link>
              </Nav.Item>
              
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
