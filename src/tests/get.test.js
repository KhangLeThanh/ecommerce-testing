import chai from "chai"
import get from "../get.js"
const expect = chai.expect

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe("Get", () => {

    it("fetches value at path a[0].b.c", () =>{
        expect(get(object, 'a[0].b.c')).to.equal(3)
    });
   
    it("fetches value at path ['a', '0', 'b', 'c']", () =>{
        expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3)
    });

    it("returns wanted default value when path is not found", () =>{
        expect(get(object, 'a.b.c', null)).to.equal(null)
    });
    
    it("returns default value when object is null and default value is not defined", () =>{
        expect(get(null, 'a.b.c')).to.equal(undefined)
    });

    it("returns default value when path is not found and default value is not defined", () =>{
        expect(get(object, null)).to.equal(undefined)
    });

})