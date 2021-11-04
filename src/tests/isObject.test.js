import chai from "chai"
import isObject from "../isObject.js"
const expect = chai.expect
const myArray = [{a:1}, {b:2}];
const myObject ={a:1, b:2}
function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}
describe("isObject", () => {
    it("return true when value is an array", () =>{
        expect(isObject(myArray)).to.be.true;
    });  

    it("return true when value is an object", () =>{
        expect(isObject(myObject)).to.be.true;
    });  

    it("return true when value is a function", () =>{
        expect(isObject(myFunction)).to.be.true;
    }); 

    it("return false when value is null", () =>{
        expect(isObject(null)).to.be.false;
    });  
})
