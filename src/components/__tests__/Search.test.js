import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_RES_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_RES_DATA);
        }
    })

});

it("Should Search resList for ice cream text input", async()=>{
    
    await act(async()=>render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const totalCards = screen.getAllByTestId("resCard");
    expect(totalCards.length).toBe(20);

    const searchButton = screen.getByRole("button", {name:"search"});

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: {value: "ice cream"}});
    fireEvent.click(searchButton);

    const searchCards=screen.getAllByTestId("resCard");
    expect(searchCards.length).toBe(2);
    // expect(searchButton).toBeInTheDocument();
    
})

it("Should filter top rated restaurants", async()=>{
    
    await act(async()=>render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    //console.log(cardsBeforeFilter);
    expect(cardsBeforeFilter.length).toBe(20);

    const filterBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    console.log(filterBtn);
    fireEvent.click(filterBtn);
    const cardsAfterFilter =  screen.getAllByTestId("resCard");
    //console.log(cardsAfterFilter);
    expect(cardsAfterFilter.length).toBe(2);
    
})