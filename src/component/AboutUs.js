import { UserClass } from "./UserClass"
import { UserFunction } from "./UserFunction"

export const AboutUs=()=>{
    return (
        <div>
            <h1>About us page</h1>
            <h2>This is React learing course</h2>
            <UserFunction name="Shubham Thute(Function)"/>
        </div>
    )
}

// import React from "react"

// export class AboutUs extends React.Component{
//     constructor(){
//         super();
//         console.log("Parent Component Constructor");
//     }
//     componentDidMount(){
//         console.log("Parent component mounted");      
//     }
//     render(){
//         console.log("Parent Component rendered")
//         return (
//             <div>
//             <h1>About us page</h1>
//             <h2>This is React learing course</h2>
//             {/* <UserClass name="first (Class)"/> */}
//             <UserFunction />

//         </div>
//         )
//     }

// }