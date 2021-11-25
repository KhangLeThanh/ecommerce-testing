import chai from "chai"
import isBuffer from "../isBuffer.js"
const expect = chai.expect

const symbol = Symbol('hello');
const text = "not running"
const object ={a:1, b:2}
const array = [{a:1}, {b:2}];
const buffer = Buffer.from(array);

describe("isBuffer", () => {
    it("return true when value is a buffer", () =>{
        expect(isBuffer(buffer)).to.be.false;
    });  
    it("return false when value is a symbol", () =>{
        expect(isBuffer(symbol)).to.be.false;
    });  

    it("return false when value is a string", () =>{
        expect(isBuffer(text)).to.be.false;
    }); 

    it("return false when value is an object", () =>{
        expect(isBuffer(object)).to.be.false;
    });  

    it("return false when value is an array", () =>{
        expect(isBuffer(array)).to.be.false;
    });

    it("return false when value is null", () =>{
        expect(isBuffer(null)).to.be.false;
    }); 

})
