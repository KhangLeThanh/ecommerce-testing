import chai from "chai"
import toNumber from "../toNumber.js"
import isObject from '../isObject.js'
import isSymbol from '../isSymbol.js'
const expect = chai.expect
const mySymbol = Symbol('hello');
const value = 0;
function myFunction() {
    return 2;   
}
describe("toNumber", () => {

    it("converting a string to a number", () =>{
        expect(toNumber('3.2')).to.eql(3.2);
    });  
    it("returning a same number", () =>{
        expect(toNumber(3.2)).to.eql(3.2);
    });  
    it("returning an Infinity", () =>{
        expect(toNumber(Infinity)).to.eql(Infinity);
    }); 
    it("returning a very small number", () =>{
        expect(toNumber(Number.MIN_VALUE)).to.eql(Number.MIN_VALUE);
    });
    it("returning NaN when value is an array", () =>{
        if(expect(isObject([1, 2, 3])).to.be.true){
            expect(toNumber([1, 2, 3])).to.be.NaN;
        }
    });
    it("returning NaN when value is a Symbol", () =>{
        if(expect(isSymbol(mySymbol)).to.be.true){
            expect(toNumber(mySymbol)).to.be.NaN;
        }
    });
    it("if type of value is not a string", () =>{
        expect(toNumber(null)).to.eql(0);    
    });
  
   
})
