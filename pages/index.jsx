import Link from "next/link";
import styles from "../styles/index.module.scss";
import Layout from "../components/Layout";
import TypeIt from "typeit-react";
import Button from "react-bootstrap/Button"
export default function Home() {
  const words = ["Collaboratively", "Whenever", "Interactively"];
  return (
    <Layout>
      <div className={styles.indexContainer}>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block" }}>
            <h1 className={styles.title}>The Place to Phonebank&nbsp;</h1>
          </div>
          <div style={{ display: "inline-block" }}>
            <TypeIt
           className={styles.title}
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
                // Remember to return it!
                return instance;
              }}
            />
          </div>  
          
          <div className={styles.titleButtonContainer} >
              <Button >Sign Up</Button>
              <div style={{width: "10%"}}></div>
              <Button>Log In</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
