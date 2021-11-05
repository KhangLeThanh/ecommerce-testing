import chai from "chai"
import upperFirst from "../upperFirst.js"
const expect = chai.expect
const lowerCaseString = "hello world"
const firstLowerCaseString = "hElLo wOrLd"
const upperCaseString = "Hello world"
const capitalizedString = "COFFE"
const firstCapitalizedString = "COFFE house"
const emptyString = ""


describe("upperFirst", () => {
    it("returning a first character lowercase of a string to be uppercase", () =>{
        expect(upperFirst(lowerCaseString)).to.equal("Hello world")
    });  
    it("returning a first character lowercase of a mixed lowercase and uppercase string to be uppercase", () =>{
        expect(upperFirst(firstLowerCaseString)).to.equal("HElLo wOrLd")
    }); 
    it("returning a same capitalized string", () =>{
        expect(upperFirst(capitalizedString)).to.equal("COFFE")
    });
    it("returning a same first capitalized string", () =>{
        expect(upperFirst(firstCapitalizedString)).to.equal("COFFE house")
    });
    it("returning a same uppercase string", () =>{
        expect(upperFirst(upperCaseString)).to.equal("Hello world")
    });
    it("returning a same empty string", () =>{
        expect(upperFirst(emptyString)).to.equal("")
    });
})
