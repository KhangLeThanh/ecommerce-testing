import chai from'chai';
import divide from'./divide.js';

const expect = chai.expect


describe("Divide", () => {
 it("divides positive number to positive number", () =>{
     expect(divide(6,4)).to.equal(1)
 });
})
