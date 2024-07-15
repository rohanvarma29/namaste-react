import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props)=>{
    const {resData}=props;

    const{name, cuisines, avgRating, sla, cloudinaryImageId} = resData?.info;
    const {LogInUser} = useContext(UserContext);
    return (
        <div className="m-4 p-4 w-[250px] h-[500px] hover:shadow-xl hover:border rounded-lg">
            <img
            className="rounded-lg h-[250px]"
            alt="res-logo"
            src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="p-2 font-bold">{name}</h3>
            <h4 className="p-2 font-light">{cuisines.join(", ")}</h4>
            <h4 className="p-2 font-light">{avgRating} stars</h4>
            <h4 className="p-2 font-light">ETA: {sla.deliveryTime} minutes</h4>
            <h4 className="p-2 font-light">{LogInUser}</h4>
        </div>
    );
};

//Higher order component
export const withStarLabel = (RestaurantCard)=>{

    return(props)=>{
        return(
            <div>
                 <label className="px-1 ml-2 absolute bg-black rounded-lg text-white font-light">stared⭐️</label>
                 <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;