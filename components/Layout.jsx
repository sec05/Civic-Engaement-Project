import React from "react";
import MenuBar from "./MenuBar";
import styles from "../styles/Layout.module.scss";
import useUser from "../helpers/userCheck";
import {useRouter} from "next/router"
import { route } from "next/dist/next-server/server/router";
const Layout = (props) => {
const router = useRouter();
    
if(router.pathname !== "/" && router.pathname !== "/account/signup" && router.pathname !== "/account/login")
{
    useUser({ redirectTo: "/" });
}
const {user, mutateUser} = useUser();
console.log(user?.isLoggedIn);
if(user?.isLoggedIn === true)
{
    console.log("logged in path")
    if(router.pathname === "/account/signup" || router.pathname === "/account/login")
    {
        router.push("/");
        console.log("redirrecting")
    }
}
  return (
    <div className="layout">
      <MenuBar></MenuBar>

      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
