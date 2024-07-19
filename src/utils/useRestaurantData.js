import { useEffect, useState} from "react"


const useRestaurantData = ()=>{

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

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


    return{
        restaurantList,
        filteredRestaurant,
        setFilteredRestaurant
    } 
}

export default useRestaurantData;