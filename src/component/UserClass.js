import React from "react";
export class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userDetails: {
                name: "Shu",
                location: "Noida"
            }
        }
        console.log("Child Component Contrsuctor");
    }
    async componentDidMount(){

        const response=await fetch("https://api.github.com/users/thuteshubham");
        const json=await response.json();

        this.setState({
            userDetails:json
        })
    
    }

    componentDidUpdate(){
        console.log("Child component updated")
    }

    componentWillUnmount(){
        console.log("Component will unmount")
    }
    render(){

        const {name,location, avatar_url}= this.state.userDetails;
        
        return(
            <div className="user-card">
                <h2>Name: {name} </h2>
                <h3>Location: {location}</h3>
                <h3>Profile: {avatar_url}</h3>
            </div>
        )
    }
}
