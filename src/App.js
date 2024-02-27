
import React from "react";
import ReactDOM  from "react-dom/client";

//components
import {Header} from "./component/Header"
import { Body } from "./component/Body";
import { AboutUs } from "./component/AboutUs";
import { ContactUs } from "./component/ContactUs";
import { Error } from "./component/Error";


import { createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";



const AppLayout= ()=>{
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter= createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <ContactUs />
      }
    ]
  }
])


const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)