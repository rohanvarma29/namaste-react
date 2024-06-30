import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    const [btnName,setBtnName] = useState("Login");
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link className="no-underline" to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link  className="no-underline"to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link className="no-underline" to={'/contact'}>Contact</Link>
                    </li>
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