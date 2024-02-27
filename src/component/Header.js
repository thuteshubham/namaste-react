import { useEffect, useState } from "react"
import {LOGO_URL} from "../utils/constants"

export const Header= ()=>{

  let [loginButton, setLoginButton]= useState("Login");

  useEffect(()=> console.log("useeffect called"));

    return (
      <div className="header">
        <div className="logo-container">
          <img 
            className="logo"
            src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>About Us</li>
          <li>Cart</li>
          <button className="login-btn" 
          onClick={()=> loginButton==="Login"? setLoginButton("Logout"): setLoginButton("Login")}>
            {loginButton}</button>
          </ul>
        </div>
      </div>
    )
  }