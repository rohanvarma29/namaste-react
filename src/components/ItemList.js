import { CDN_URL } from "../utils/constants";
const ItemList = ({item})=>{
    return(
        <div className="p-2 m-2  border-b-2 text-left flex justify-between">
            <div className="w-9/12">
                <p>{item?.card?.info?.name}</p>
                <p className="text-sm">₹{item?.card?.info?.price ? 
                        item?.card?.info?.price/100 
                        : item?.card?.info?.defaultPrice/100}
                </p>
                <div className="font-thin text-xs">
                {item?.card?.info?.description}
                </div>
            </div> 
            <div className="m-1 w-3/12">
                <img src={CDN_URL+item?.card?.info?.imageId}/>
            </div>

        </div>
    );
};

export default ItemList;