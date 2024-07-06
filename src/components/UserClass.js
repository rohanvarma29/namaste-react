import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        //console.log("Child Constructor")
    }

    componentDidMount(){
        //console.log("Child componentDidMount");
    }

    render(){
        //console.log("Child render");
        return(
            <div className="user-card">
                <h2>name: {this.props.name}</h2>
                <h3>location: {this.props.location}</h3>
                <h3>contact: rohangaddam95@gmail.com</h3>
            </div>
        );
    }
}

export default UserClass;