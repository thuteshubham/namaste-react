import { useEffect, useState } from "react"
import {LOGO_URL} from "../utils/constants"
import { Link} from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Header= ()=>{

  let [loginButton, setLoginButton]= useState("Login");

  const onlineStatus=useOnlineStatus()

    return (
      <div className="flex justify-between bg-green-100 shadow-lg">
        <div className="logo-container">
          <img className="w-40" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 ">
            <li className="px-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About Us </Link>
            </li>
            <li className="px-2">
              <Link to="/contact">contact Us</Link>
            </li>
            <li className="px-2">Cart</li>
            <li className="px-2">
              <Link to="/groceries">Groceries</Link>
            </li>
            <button
              className="login-btn"
              onClick={() =>
                loginButton === "Login"
                  ? setLoginButton("Logout")
                  : setLoginButton("Login")
              }
            >
              {loginButton}
            </button>
          </ul>
        </div>
      </div>
    );
  }