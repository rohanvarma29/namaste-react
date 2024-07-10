import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer.";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ItemList from "./ItemList";


const RestaurantMenu = ()=>{

    const {resId} = useParams();
    console.log(resId);

    const resInfo = useRestaurantMenu(resId);
   

    if(resInfo===null) return <Shimmer/>;
    
    const { name, cuisines, locality, cloudinaryImageId, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info ;
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    //console.log(itemCards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
            c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    console.log(categories);

    return(
        <div className="p-4 my-4 mx-[10%] sm:mx-[18%] text-center">
            <h1 className="font-extrabold">{name}</h1>
            <h3>{locality}</h3>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p> 
            <img
            className="py-2 my-2 px-1 mx-auto h-[300px] w-[300px] rounded-2xl center"
            src={CDN_URL+cloudinaryImageId}
            />
            <div className="p-2 mt-4">
            <h2 className="font-semibold my-2">Menu</h2>
                
            {categories.map(category =>
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
            )}
            </div>
        </div>
    )
}

export default RestaurantMenu;