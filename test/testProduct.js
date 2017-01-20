var expect=require('chai').expect;

let prices = {banana:1, potato:2, tomato:3, cucumber:4, salad:5, apple:6};
let products = ['cucumber','cucumber','potato','cucumber'];

var myWonderfullFunction = require("../program.js").myWonderfullFunction;
describe('Hello world testing !',
    function(){

        it('Test de l\'exemple',function(){
            var result =myWonderfullFunction(prices,products);
            expect(result.price).to.be.equal(10);
            expect(result.countArticles).to.be.equal(4);
            expect(result.countProducts).to.be.equal(2);

        })
        it('Test avec un seul article',function(){
            var result =myWonderfullFunction(prices,['cucumber']);
            expect(result.price).to.be.equal(4);
            expect(result.countArticles).to.be.equal(1);
            expect(result.countProducts).to.be.equal(1);

        })
        it('Test avec des pramètres vides',function(){
            var result =myWonderfullFunction({},[]);
            expect(result.price).to.be.equal(0);
            expect(result.countArticles).to.be.equal(0);
            expect(result.countProducts).to.be.equal(0);

        })
        it('Test avec deux produits différents',function(){
            var result =myWonderfullFunction(prices,['potato', 'apple']);
            expect(result.price).to.be.equal(8);
            expect(result.countArticles).to.be.equal(2);
            expect(result.countProducts).to.be.equal(2);

        })
});