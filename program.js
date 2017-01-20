let prices = {banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6};
let products = ['tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato'];

function myWonderfullFunction(prices, products){
    var countProduct = products.length;
    var uniqueArray = [];
    var promo = {};
    var price = 0;
    products.forEach(function (value) {
        if(promo.hasOwnProperty(value)) {
            promo[value]++;
        }
        else
        {
            promo[value] = 1;
        }
        price+=prices[value];
        if(uniqueArray.includes(value))
        {
            
        }
        else{
            uniqueArray.push(value);
        }
    });
    for (var property in promo) {
       promo[property] = promo[property] / 3;
       promo[property] = Math.floor(promo[property]);
       price = price - prices[property]*promo[property];
    }
    console.log(countProduct);
    console.log(uniqueArray.length);
    console.log(price);
    var result = {price : price, countArticles: countProduct, countProducts: uniqueArray.length};
    return result;
}

myWonderfullFunction(prices, products);
module.exports = {
    myWonderfullFunction : myWonderfullFunction
}