const expect = require('chai').expect;
const sinon = require('sinon');
const { SpecialFullCoverageCalculator } = require('../src/priceCalculators');
const { Product } = require('../src/coTest');

describe("SpecialFullCoverageCalculator",function() {
  describe("#getNewPrice", function() {
    const INITIAL_SELL_IN = 30;
    const INITIAL_PRICE = 0;
    beforeEach(function() {
      product = new Product('I\'m a test product', INITIAL_SELL_IN, INITIAL_PRICE)
      calculator = new SpecialFullCoverageCalculator(product);
    })
    it('should increment price by 1 if sell in > 10 ', function() {
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE + 1);
    })
    it('should increment price by 2 if sell in is 10 ', function() {
      product.sellIn = 10;
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE + 2);
    })
    it('should increment price by 2 if sell in is between 10 and 5 ', function() {
      product.sellIn = 8;
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE + 2);
    })
    it('should increment price by 3 if sell in is 5 ', function() {
      product.sellIn = 5;
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE + 3);
    })
    it('should increment price by 3 if sell in is between 5 and 0', function() {
      product.sellIn = 3;
      expect(calculator.getNewPrice()).equal(INITIAL_PRICE + 3);
    })

    it('should return 0 if sell in is less or equal to 0', function() {
      product.sellIn = -3;
      expect(calculator.getNewPrice()).equal(0);
    })

  })

})