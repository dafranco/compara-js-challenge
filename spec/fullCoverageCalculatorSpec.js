const expect = require('chai').expect;
const sinon = require('sinon');
const { FullCoverageCalculator } = require('../src/priceCalculators');
const { Product } = require('../src/coTest');

describe("FullCoverageCalculator",function() {
  describe("#getNewPrice", function() {
    const INITIAL_SELL_IN = 30;
    const INITIAL_PRICE = 0;
    beforeEach(function() {
      product = new Product('I\'m a test product', INITIAL_SELL_IN, INITIAL_PRICE)
      calculator = new FullCoverageCalculator(product);
    })
    it('should increment price by 1 if sell in > 0 ', function(){
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE + 1);
    })
    it('should increment price by 1 if sell in is 0 ', function(){
      product.sellIn = 0;
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE + 1);
    })
    it('should increment price by 2 if sell in < 0', function(){
      product.sellIn = -1;
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE + 2);
    })

  })

})