import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{
    const [btnName,setBtnName] = useState("Login");
    const {LogInUser} = useContext(UserContext);
    //console.log(LogInUser);

    //subscribing to the store using selector
    const cartItems = useSelector((store)=>store.cart.items);
    //console.log(cartItems);

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
                    <li className="px-4 font-bold">
                        <Link to={"/cart"}>Cart({cartItems.length})</Link>
                    </li>
                    <button 
                    className="login"
                    onClick={()=>{
                        btnName==="Login" ? setBtnName("LogOut") : setBtnName("Login");
                    }}
                    >{btnName}</button>
                    <li className="px-4">{LogInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;