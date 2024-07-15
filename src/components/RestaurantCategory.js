import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data, showItems, setShowItems})=>{
    //console.log(data);

    const handleClick = ()=>{
        setShowItems(!showItems);
    }

    return(
            <div className="p-4 m-4 bg-blue-50 shadow-lg">
                {/* Header */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <div 
                    className="font-bold" >
                        {data?.title}({data?.itemCards.length})
                    </div>
                    <p className="font-semibold">⌄</p>
                </div>
                {/* Accordion Body */}
                {showItems && <div>
                    {data?.itemCards.map(item=>
                        <ItemList key={item?.card?.info?.id} item={item}/>
                    )}
                </div>}
            </div>
    );
};

export default RestaurantCategory;