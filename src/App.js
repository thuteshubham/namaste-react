
import React, { Suspense, lazy } from "react";
import ReactDOM  from "react-dom/client";

import { createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";

//components
import {Header} from "./component/Header"
import { Body } from "./component/Body";
import { AboutUs } from "./component/AboutUs";
import { ContactUs } from "./component/ContactUs";
// import { Error } from "./component/Error";
import { RestaurantMenu } from "./component/RestaurantMenu";

const Groceries=lazy(()=> import("./component/Groceries"));


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
    // errorElement: <Error />,
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
      },
      {
        path: '/restaurants/:restaurantId',
        element: <RestaurantMenu />
      },
      {
        path: '/groceries',
        element:(
          <Suspense fallback= {<h1>Loading ...</h1>}>
            <Groceries />
          </Suspense>
        )
      }
    ]
  }
])


const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)