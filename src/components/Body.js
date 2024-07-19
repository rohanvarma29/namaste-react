import RestaurantCard, {withStarLabel} from "./RestaurantCard";
import { useContext, useState} from "react";
import Shimmer from "./Shimmer.";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";
import UserContext from "../utils/UserContext";


const Body = ()=>{
    //Local state variable - Super powerful variable
    
    const [searchText, setSearchText] = useState("");

   // console.log("rendered");

   const {
    restaurantList,
    filteredRestaurant,
    setFilteredRestaurant
   } = useRestaurantData();
   //console.log(restaurantList);
   const RestaurantCardWithStar = withStarLabel(RestaurantCard);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus===false){
        return(
            <h1 className=" m-6 p-4 bg-purple-100 text-center ">You're offline. Please check your internet connection</h1>
        );
    }

    const {LogInUser, setUserName} = useContext(UserContext);

    //Conditional rendering
    return restaurantList.length===0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input
                     type="text" 
                     data-testid = "searchInput"
                     className="border border-solid border-black rounded-md"
                     value={searchText}
                     onChange={(e)=>{
                        setSearchText(e.target.value);
                     }}
                     ></input>

                    <button className="px-4 py-2 bg-green-100 m-4 rounded-xl"
                     onClick={()=>{
                        console.log(searchText);
                        const filterdList = restaurantList.filter(
                            (restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filterdList);
                     }}     
                    >search</button>
                </div>

                <button className=" px-4 py-2 bg-blue-100 rounded-lg"
                    onClick={()=>{
                        const filterdList = restaurantList.filter(
                            (res)=>res.info.avgRating > 4.5
                        );
                        console.log(filterdList);
                        setFilteredRestaurant(filterdList);
                    }}
                >Top Rated Restaurants
                </button>

                <div className="mx-4">
                    User Name: 
                    <input 
                    className="border p-2"
                    type="text"
                    value={LogInUser}
                    onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurant.map( restaurant=> 
                        <Link className="no-underline" key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} > 
                            {restaurant.info.avgRating > 4.2 ? (<RestaurantCardWithStar resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>) }
                        </Link>
                    )
                }
            </div>
        </div>
    )
};

export default Body;