import { render, screen} from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"


describe("Contact page test cases",()=>{
    it("should load contact component",()=>{
        render(<Contact/>);
    
        //Querying
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    
    });
    
    it("should load button inside contact component",()=>{
        render(<Contact/>);
    
        const button = screen.getByRole("button")
    
        //Assertion
        expect(button).toBeInTheDocument();
    
    });
    
    it("should load input name inside contact component",()=>{
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name")
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    
    });
    
    it("should load 2 input boxes on contact component",()=>{
        render(<Contact/>);
    
        //This return jsx element or virtual DOM object or Fiber Node
        const inputBoxes = screen.getAllByRole("textbox");
        
        //console.log(inputBoxes);
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});
