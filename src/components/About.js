import React from "react";
import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";

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
                <UserClass name="Rohan (Class)" location="Hyderabad"/>
             </div>
        )
    }
}

export default About;