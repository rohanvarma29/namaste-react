import {fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_RES_MENU_DATA from "../mocks/MockResMenuData.json"
import { act } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_RES_MENU_DATA);
        }
    })
})

it("Should load restaurant menu component", async ()=>{

    await act(async ()=>render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </BrowserRouter>  
        </Provider>
    ));

    const accordianHeader = screen.getByText("Recommended(11)");
    fireEvent.click(accordianHeader);

    const itemList = screen.getAllByTestId("foodItems");
    expect(itemList.length).toBe(11);

    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    //console.log(addBtns.length);
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart(1)")).toBeInTheDocument();

    const cartItems = screen.getAllByTestId("cartItems");
    expect(cartItems.length).toBe(1);
    
})