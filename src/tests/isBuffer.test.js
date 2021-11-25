import chai from "chai"
import isBuffer from "../isBuffer.js"
const expect = chai.expect

const symbol = Symbol('hello');
const text = "not running"
const object ={a:1, b:2}
const array = [{a:1}, {b:2}];
const buffer = Buffer.from(array);
var uint8 = new Uint8Array(2);

describe("isBuffer", () => {
    it("return true when value is a buffer", () =>{
        expect(Buffer.isBuffer(buffer)).to.be.true;
    });  
    it("return false when value is not a buffer", () =>{
        expect(Buffer.isBuffer(uint8)).to.be.false;
    });  
    it("return false when value is a symbol", () =>{
        expect(Buffer.isBuffer(symbol)).to.be.false;
    });  

    it("return false when value is a string", () =>{
        expect(Buffer.isBuffer(text)).to.be.false;
    }); 

    it("return false when value is an object", () =>{
        expect(Buffer.isBuffer(object)).to.be.false;
    });  

    it("return false when value is an array", () =>{
        expect(Buffer.isBuffer(array)).to.be.false;
    });

    it("return false when value is null", () =>{
        expect(Buffer.isBuffer(null)).to.be.false;
    }); 

})
