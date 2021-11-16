import chai from "chai"
import ceil from "../ceil.js"
const expect = chai.expect


describe("Ceil", () => {

    it("rounds up an interger with no second parameter", () =>{
        expect(ceil(4)).to.equal(4)
    });
   
    it("rounds up decimal with 2 as second parameter", () =>{
       expect(ceil(6.004,2)).to.equal(6.01)
    });
   
    it("rounds up decimal with a negative second parameter ", () =>{
       expect(ceil(20050.312,-3)).to.equal(21000)
    });

    it("rounds up a negative fraction", () =>{
      expect(ceil(-3/2,0)).to.equal(-1)
   });
   
    it("rounds up zero with a second parameter", () =>{
       expect(ceil(0,2)).to.equal(0)
    });
   
    it("rounds up integer with higher second parameter", () =>{
       expect(ceil(50,3)).to.equal(50)
    });

    it("rounds integer with higher negative second parameter", () =>{
        expect(ceil(-3,-4)).to.equal(0)
     });
   
   })