import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems[0]?.card?.info?.name);

    //dispatch
    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    return(
        <div className="text-center mx-auto p-10 md:w-6/12  w-9/12 ">
            <h1 className="font-bold text-2xl">Cart</h1>

            <button 
            className="p-2 m-2 bg-black text-white rounded-lg text-sm"
            onClick={handleClearCart}
            >Clear cart</button>

            {cartItems.length===0 
                ? <h2 className=" m-[50px] ">Add items to the cart</h2> 
                :cartItems.map(item=>
                <ItemList item={item}/>
            )}
            
        </div>
    )
}

export default Cart;