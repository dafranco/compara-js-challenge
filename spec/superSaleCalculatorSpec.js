const expect = require('chai').expect;
const sinon = require('sinon');
const { SuperSaleCalculator } = require('../src/priceCalculators');
const { Product } = require('../src/coTest');

describe("superSaleCalculator", function() {
  var product, calculator;
  const INITIAL_SELL_IN = 30;
  const INITIAL_PRICE = 60;
  describe("#getNewPrice", function() {
    beforeEach(function() {
      product = new Product('I\'m a test product', INITIAL_SELL_IN, INITIAL_PRICE)
      calculator = new SuperSaleCalculator(product);
    })
    it('should reduce price by 2 if sell in > 0 ', function(){
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE - 2);
    })
    it('should reduce price by 2 if sell in is 0 ', function(){
      product.sellIn = 0;
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE - 2);
    })
    it('should reduce price by 4 if sell in < 0', function(){
      product.sellIn = -1;
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE - 4);
    })

  })

})