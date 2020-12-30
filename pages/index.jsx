import Link from "next/link";
import styles from "../styles/index.module.scss";
import Layout from "../components/Layout";
import TypeIt from "typeit-react";
import Button from "react-bootstrap/Button"
import { useRouter } from "next/router";
import useUser from "../utils/userCheck";

export default function Home() {
  const router = useRouter();
  const { user, mutateUser } = useUser();
  const words = ["friends", "work", "school", "youth group"];
  return (
    <Layout>
      
      <div className={styles.indexContainer}>
        
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block" }}>

            <h1 className={styles.title}>A way to phonebank together <br/> online with your </h1> 
            
            </div>
            <div >
              
              <TypeIt
           className={styles.titleTI}
           
              element={"h1"}
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                for (let i = 0; i <= words.length - 1; i++) {
                  instance
                    .type(words[i])
                    .pause(500)
                    .delete(words[i].length)
                    .pause(500);
                }
                return instance;
              }}
            />

          </div>
           {!user?.isLoggedIn && (
          <div className={styles.titleButtonContainer} >
           
              <Button onClick={()=>{router.push("/account/signup")}}>Sign Up</Button>
              <div style={{width: "10%"}}></div>
              <Button onClick={()=>{router.push("/account/login")}}>Log In</Button>
          
             
          </div> 
           )}
            {user?.isLoggedIn && (
          <div className={styles.titleButtonContainer} >
           
              <Button onClick={()=>{router.push("/rooms/overview")}}>Join a room</Button>
              <div style={{width: "10%"}}></div>
              <Button onClick={()=>{router.push("/rooms/creator")}}>Create a room</Button>
          
             
          </div> 
           )}
        </div>
      
      </div>
    </Layout>
  );
}
