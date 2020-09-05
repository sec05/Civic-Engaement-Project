import React from 'react'
import styles from "../styles/MenuBar.module.scss"
import Head from "next/head"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
export default function pageNavbar() {
    return (
        
        <div style={{borderBottom: "1px solid black"}}>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
        </Head>
        <Navbar bg="light" expand="lg" className={styles.MenuMargin}>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home" className={styles.MenuItem}>Home</Nav.Link>
      <Nav.Link href="/link" className={styles.MenuItem}>Rooms</Nav.Link>
      <NavDropdown title="Resources" id="basic-nav-dropdown" inline className={styles.MenuItem}>
        <NavDropdown.Item href="#action/3.1">RAC</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Reclaim Our Vote</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <NavDropdown title="Username" id="basic-nav-dropdown" inline className={styles.MenuItem}>
  
        <NavDropdown.Item href="/account/settings">Settings</NavDropdown.Item>
        <NavDropdown.Item href="/account/signout">Sign Out</NavDropdown.Item>
      </NavDropdown>
  </Navbar.Collapse>
</Navbar>
              
            
            
        </div>

    )
}
