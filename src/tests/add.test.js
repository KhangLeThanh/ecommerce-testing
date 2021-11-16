import chai from "chai"
import add from "../add.js"
const expect = chai.expect

describe("Add", () => {

   it("adds negative integers together", () =>{
   expect(add(-2,-7)).to.equal(-9)
   });

   it("adds positive integers together", () =>{
   expect(add(3,5)).to.equal(8)
   });

   it("adds positive and negative fractionals together", () =>{
   expect(add(3/4,-2/3)).to.equal(3/4-2/3)
   });

   it("adds zeroes together", () =>{
   expect(add(0,0)).to.equal(0)
   });

   it("adds a zero and a positive decimal", () =>{
   expect(add(0,3.54)).to.equal(3.54)
   });

   it("adds two bigger numbers", () =>{
   expect(add(100000,2345)).to.equal(102345)
   });

   it("adds a big and a small number", () =>{
   expect(add(-1234567,1234567)).to.equal(0)
   });

})
