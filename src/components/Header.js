import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = ()=>{
    const [btnName,setBtnName] = useState("Login");
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button 
                    className="login"
                    onClick={()=>{
                        btnName==="Login" ? setBtnName("LogOut") : setBtnName("Login");
                    }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;