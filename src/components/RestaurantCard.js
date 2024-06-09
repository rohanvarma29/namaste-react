import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData}=props;

    const{name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = resData?.info;
    return (
        <div className="res-card">
            <img
            className="res-logo"
            alt="res-logo"
            src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>ETA: {deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;