import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";



const Body = ()=>{
    //Local state variable - Super powerful variable
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={()=>{
                        const filterdList = restaurantList.filter(
                            (res)=>res.info.avgRating > 4.5
                        );
                        console.log(filterdList);
                        setRestaurantList(filterdList);
                    }}
                >Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    restaurantList.map( restaurant=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
};

export default Body;