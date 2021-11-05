import chai from "chai"
import castArray from "../castArray.js"
const expect = chai.expect

const myArray = [1,2,3];
const myObject ={a:1, b:2};
const myString ="hello world";

describe("castArray", () => {
    it("return an array", () =>{
        expect(castArray(myArray)).to.eql([1,2,3]);
    });  
    it("return an array object", () =>{
        expect(castArray(myObject)).to.eql([{a:1, b:2}]);
    });  
    it("return an array string", () =>{
        expect(castArray(myString)).to.eql(["hello world"]);
    }); 
    it("return a null array", () =>{
        expect(castArray(null)).to.eql([null]);
    });
    it("return an undefined array", () =>{
        expect(castArray(undefined)).to.eql([undefined]);
    }); 
    it("return an empty array", () =>{
        expect(castArray([])).to.eql([]);
    });  
    it("return true if comparing a same array", () =>{
        expect(castArray(myArray)).to.eql(myArray);
    });
})
