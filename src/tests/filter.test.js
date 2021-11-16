import chai from "chai"
import filter from "../filter.js"
const expect = chai.expect

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': true },
    { 'user': 'bob',    'active': false },
    { 'user': 'james',  'active': false }
]
const products = [
    { 'product': 'fruit',  'sale': true },
    { 'product': 'book',   'sale': false },
    { 'product': 'cheese', 'sale': true }
]

const tools = [
    { 'product': 'hammer',  'sale': false },
]

const food = [
    { 'product': 'bread',  'sale': true },
]

describe("Filter", () => {

    it("filters active users", () =>{
        expect(filter(users, ({ active }) => active)).to.deep.equal([{ 'user': 'barney', 'active': true }, { 'user': 'fred', 'active': true }])
    });
   
    it("filters products on sale", () =>{
        expect(filter(products, ({ sale }) => sale )).to.deep.equal([{ 'product': 'fruit', 'sale': true }, { 'product': 'cheese', 'sale': true }])
    });

    it("filters products with predicate missing", () =>{
        expect(function(){filter(products);}).to.throw(TypeError);
    });

    it("filters null array", () =>{
        expect(filter(null, ({ active }) => active)).to.deep.equal([[]])
    });

    it("filters all false values", () =>{
        expect(filter(tools, ({ sale }) => sale )).to.deep.equal([[]])
    });

    it("filters with false predicate", () =>{
        expect(filter(tools, ({ broken }) => broken )).to.deep.equal([[]])
    });

    it("filters an array with one true value", () =>{
        expect(filter(food, ({ sale }) => sale )).to.deep.equal(food)
    });
   
})
