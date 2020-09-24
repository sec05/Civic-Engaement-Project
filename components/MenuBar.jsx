import React from 'react'
import styles from "../styles/MenuBar.module.scss"
import Head from "next/head"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Link from "next/link"
import useUser from "../helpers/userCheck"
import fetchJson from "../helpers/fetchJson"
import { useRouter } from 'next/router'
const MenuBar = () => {
  const router = useRouter();
  const { user, mutateUser } = useUser();
 
  let name = user?.username;
  if(name===undefined)
  {
    name = "Sign In!";
  } 
    return (
        
        <div style={{borderBottom: "1px solid black"}}>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
        </Head>
        <Navbar bg="light" expand="lg" className={styles.MenuMargin}>
  <Navbar.Brand><Link href="/">React-Bootstrap</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Item className={styles.MenuItem}><Link href="/home">Home</Link></Nav.Item>
      <Nav.Item className={styles.MenuItem}><Link href="/home">Home</Link></Nav.Item>
      <NavDropdown title="Resources" id="basic-nav-dropdown" inline className={styles.MenuItem}>
        <NavDropdown.Item href="#action/3.1">RAC</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Reclaim Our Vote</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
    {!user?.isLoggedIn && (
      <Nav>
        <Nav.Item className={styles.MenuItem} ><Link href="/account/login">Log In</Link></Nav.Item>
        <Nav.Item className={styles.MenuItem} ><Link href="/account/signup">Sign Up</Link></Nav.Item>
      </Nav>
 
    
        
    )}
    {user?.isLoggedIn && (
      <NavDropdown title={name} id="basic-nav-dropdown" inline className={styles.MenuItem} disabled={false}>
  <NavDropdown.Item href="/account/settings">Settings</NavDropdown.Item>
        <NavDropdown.Item 
                  onClick={async (e) => {
                    e.preventDefault();
                    await mutateUser(fetchJson("/api/logout"));
                    router.push("/");
                  }}>Sign Out</NavDropdown.Item>
      </NavDropdown>
        
     
        
    )}
    
      
  </Navbar.Collapse>
</Navbar>
              
            
            
        </div>

    )
    
    
}
export default MenuBar;