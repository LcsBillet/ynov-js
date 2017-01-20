var expect=require('chai').expect;

let prices = {banana:1, potato:2, tomato:3, cucumber:4, salad:5, apple:6};
let products = ['cucumber','cucumber','potato','cucumber'];

var myWonderfullFunction = require("../exercice1").myWonderfullFunction;
describe('Hello world testing !',
    function(){

        it('should be true',function(){
            var result =myWonderfullFunction(prices,products);
            expect(result.price).to.be.equal(10);
            expect(result.countArticles).to.be.equal(4);
            expect(result.countProducts).to.be.equal(2);

        })
        it('should be true',function(){
            var result =myWonderfullFunction({},[]);
            expect(result.price).to.be.equal(0);
            expect(result.countArticles).to.be.equal(0);
            expect(result.countProducts).to.be.equal(0);

        })
});