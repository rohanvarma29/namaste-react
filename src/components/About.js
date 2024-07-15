import React from "react";
import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent ComponentDIdMount");
    }

    render(){
        console.log("Parent render");
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is about us page</h2>
                <div>
                    Login User: 
                    <UserContext.Consumer>{({LogInUser})=><h1 className="font-bold">{LogInUser}</h1>}</UserContext.Consumer>
                </div>
                <UserClass name="Rohan (Class)" location="Hyderabad"/>
             </div>
        )
    }
}

export default About;