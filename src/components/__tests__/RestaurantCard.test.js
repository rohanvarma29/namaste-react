import { render, screen } from "@testing-library/react"
import RestaurantCard, {withStarLabel} from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("it should render RestaurantCard component with props Data",()=>{

    render(
        <RestaurantCard resData={MOCK_DATA}/>
    );

    const name = screen.getByText("La Pino'z Pizza");

    expect(name).toBeInTheDocument();
})

// it("it should render RestaurantCard component with Star Label", async()=>{

//     render(<withStarLabel RestaurantCard={RestaurantCard} resData={MOCK_DATA}/>);

//     const label = await screen.findByText(/stared/);
//     const name = screen.getByText("La Pino'z Pizza");
    
//      expect(label).toBeInTheDocument();
//      expect(name).toBeInTheDocument();
// });