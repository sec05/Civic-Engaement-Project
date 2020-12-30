import React from "react";
import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import useUser from "../utils/userCheck";
import fetchJson from "../utils/fetchJson";
import { Router, useRouter } from "next/router";
import styles from "../styles/NavBar.module.scss"
import { Button } from "react-bootstrap";
const NavBar = () => {
  const router = useRouter();
  const { user, mutateUser } = useUser();

  let name = user?.username;
  if (name === undefined) {
    name = "Sign In!";
  }
  function navChange(href)
  {
    router.push(href);
  }
  return (
    <div style={{ borderBottom: "none", marginLeft: "10%", marginRight: "10%" }}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        />
        <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css"/>
      </Head>

      <Navbar bg="white" variant="light" expand="lg" sticky="top" className="justify-content-center">
        <Nav>
        <Nav.Link className={styles.navLink} onClick={()=>navChange("/")}>
          Home
        </Nav.Link>
     
       
     

        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {user?.isLoggedIn && (
              <Nav >
                <Nav.Link className={styles.navLink} onClick={()=>navChange("/rooms/overview")}>
                  Rooms
                </Nav.Link>
                <Nav.Link className={styles.navLink} onClick={()=>navChange("/rooms/creator")}>
                  Create Room
                </Nav.Link>
              </Nav>
            )}
          </Nav>
          {user?.isLoggedIn && (
            <Nav >
              <NavDropdown className={styles.navDropdown} title={name} alignRight>
                <NavDropdown.Item className={styles.navDropdownItem1} onClick={async (e) => {
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
            <Nav className={styles.navButton}>
         
                
            
             
                <Button onClick={()=>router.push("/account/signup")}>Sign Up</Button>
                <Button onClick={()=>router.push("/account/login")}>Log In</Button>
           
              
             
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
