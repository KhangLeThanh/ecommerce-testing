import chai from "chai"
import isSymbol from "../isSymbol.js"
const expect = chai.expect
const mySymbol = Symbol('hello');
const text = "not running"
const myObject ={a:1, b:2}
const myArray = [{a:1}, {b:2}];

describe("isSymbol", () => {
    it("return true when value is a symbol", () =>{
        expect(isSymbol(mySymbol)).to.be.true;
    });  
    it("return false when value is a string", () =>{
        expect(isSymbol(text)).to.be.false;
    }); 
    it("return false when value is an object", () =>{
        expect(isSymbol(myObject)).to.be.false;
    });  
    it("return false when value is an array", () =>{
        expect(isSymbol(myArray)).to.be.false;
    });
    it("return false when value is null", () =>{
        expect(isSymbol(null)).to.be.false;
    }); 
})
