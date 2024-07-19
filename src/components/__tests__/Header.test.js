import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";


it("it should load header component with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <   Header/>
            </Provider>
        </BrowserRouter>   
    );

    //Querying 
    const loginButton = screen.getByRole("button", {name:"Login"});
    //Assertion
    expect(loginButton).toBeInTheDocument();

});

it("it should load header component with a cart items 0",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <   Header/>
            </Provider>
        </BrowserRouter>   
    );

    //Querying 
    const cartItems = screen.getByText(/Cart/);
    //Assertion
    expect(cartItems).toBeInTheDocument();

});

it("it should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <   Header/>
            </Provider>
        </BrowserRouter>   
    );

    const loginButton = screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button", {name:"LogOut"});
    expect(logoutButton).toBeInTheDocument();

});