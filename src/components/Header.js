import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{
    const [btnName,setBtnName] = useState("Login");
    return (
        <div className="flex justify-between p-2 bg-purple-100 shadow-lg">

            <div className="logo-container">
                <img className="w-32" src={LOGO_URL}></img>
            </div>

            <div className="flex items-center">
                <ul className="flex p-4"> 
                    <li className="px-4">
                        Online Status:{(useOnlineStatus())?"✅":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link className="no-underline" to={'/'}>Home</Link>
                    </li>
                    <li className="px-4">
                        <Link  className="no-underline"to={'/about'}>About</Link>
                    </li>
                    <li className="px-4">
                        <Link className="no-underline" to={'/contact'}>Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link className="no-underline" to={'/grocery'}>Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
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