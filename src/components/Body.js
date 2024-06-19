import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.";


const Body = ()=>{
    //Local state variable - Super powerful variable
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

   // console.log("rendered");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        //optional chaining
        const cleanData=json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setRestaurantList(cleanData);
        setFilteredRestaurant(cleanData);

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
                    filteredRestaurant.map( restaurant=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
};

export default Body;