import React from "react";
import NavBar from "./NavBar";
import styles from "../styles/Layout.module.scss";
import useUser from "../utils/userCheck";
import {useRouter} from "next/router"

const Layout = (props) => {
const router = useRouter();
    
if(router.pathname !== "/" && router.pathname !== "/account/signup" && router.pathname !== "/account/login")
{
    useUser({ redirectTo: "/" });
}
const {user, mutateUser} = useUser();

if(user?.isLoggedIn === true)
{

    if(router.pathname === "/account/signup" || router.pathname === "/account/login")
    {
        router.push("/");
     
    }
}
  return (
    <div className="layout">
      <NavBar></NavBar>

      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
