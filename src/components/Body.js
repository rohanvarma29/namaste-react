import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";


const Body = ()=>{
    //Local state variable - Super powerful variable
    
    const [searchText, setSearchText] = useState("");

   // console.log("rendered");
   const {
    restaurantList,
    filteredRestaurant,
    setFilteredRestaurant
   } = useRestaurantData();
   


    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false){
        return(
            <h1>You're offline. Please check your internet connection</h1>
        );
    }

    //Conditional rendering
    return restaurantList.length===0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                     type="text" 
                     className="search-box"
                     value={searchText}
                     onChange={(e)=>{
                        setSearchText(e.target.value);
                     }}
                     ></input>

                    <button
                     onClick={()=>{
                        console.log(searchText);
                        const filterdList = restaurantList.filter(
                            (restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filterdList);
                     }}     
                    >search</button>
                </div>

                <button className="filter-btn"
                    onClick={()=>{
                        const filterdList = restaurantList.filter(
                            (res)=>res.info.avgRating > 4.5
                        );
                        console.log(filterdList);
                        setFilteredRestaurant(filterdList);
                    }}
                >Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map( restaurant=> <Link className="no-underline" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} > <RestaurantCard resData={restaurant}/> </Link>)
                }
            </div>
        </div>
    )
};

export default Body;