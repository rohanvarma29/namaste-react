import { sum } from "../sum"


test("Sum gives the result of the sum of two numbers",()=>{
    const result = sum(1,4);

    //Assertion
    expect(result).toBe(5);
});